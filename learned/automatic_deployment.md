# Automatic Deployment

## Get started

### Step 1 - Set up a bash script that handles the process of deploying the app

-   Create a bash script in your project with the instructions necessary to build and deploy the application.

    -   e.g.

        ```bash
        #!/bin/bash

        # move to the root of the project directory
        cd ..

        # Pull the latest changes from the main branch
        git pull origin main

        # Install dependencies
        npm install

        # Build the Next.js app
        npm run build

        # Restart the Node.js app using pm2
        pm2 restart personal-site
        ```

        -   The above script does the following:
            -   moves to the root of the project directory
            -   pulls from main
            -   installs any necessary dependencies for the build
            -   builds the app
            -   restarts the server with the updated build

### Step 2 - Set up github actions workflow

-   Get your private ssh key that is used for ssh access into the server. This is the key pair that was generated when the EC2 instance was created and can be a `.pem` file or `.ppk` file (could be other filetype).

    -   If you have a `.ppk` file, just convert it into a `.pem` file by running the following:

        ```bash
        sudo apt-get install putty-tools
        puttygen your-key.ppk -O private-openssh -o your-key.pem
        mv your-key.pem ~/.ssh/
        chmod 400 ~/.ssh/your-key.pem
        ```

-   In your github repository, go to: Settings > Secrets and variables > Actions > New repository secret

    -   Create a repository secret to store the contents of your ssh key.
    -   Create any other secrets you may want, I also created an SSH_HOST secret that stores the public IP address of the server.

-   Create .github/workflows directory in your project and create a build.yml file inside of it.

    ```yml
    name: Build and Deploy

    on:
        push:
            branches:
                - main

    jobs:
        build:
            runs-on: ubuntu-latest

            steps:
                - name: Checkout code
                uses: actions/checkout@v2

                - name: Install SSH Key
                uses: shimataro/ssh-key-action@v2
                with:
                    key: ${{ secrets.DEPLOY_SSH_PRIVATE_KEY }}
                    known_hosts: "just-a-placeholder-so-we-dont-get-errors"

                - name: Adding Known Hosts
                run: ssh-keyscan -H ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts

                - name: Deploy to EC2 instance
                run: ssh ubuntu@${{ secrets.SSH_HOST }} 'cd /home/ubuntu/personal-site/deployment && bash deploy.sh'
    ```

    -   This file runs any time something is pushed to the main branch and does the following:
        -   gets the most updated code on the main branch
        -   gets the DEPLOY_SSH_PRIVATE_KEY and the SSH_HOST, which are stored as secrets
        -   ssh's into the server and runs the deploy.sh script.
