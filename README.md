![displayImage](public/images/displayImage.png "Display Image")

# This is a portfolio website built with Next.js.

-   This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
-   [Link to try it!](https://santiagogarcia.dev)

# Getting Started

## To Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## To Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## To Deploy Website to a Custom Domain Over HTTPS on an EC2 instance:

### Step 1: Create EC2 Instance

-   **OS Image**: Ubuntu OS Image (Ubuntu Server 22.04 LTS)
-   **Key Pair**: Create a key pair name to be able to SSH into the instance.
-   **Network Settings**:
    -   Allow SSH traffic from your IP address or anywhere.
    -   Allow HTTPS traffic from the internet.
    -   Allow HTTP traffic from the internet.
-   Launch the instance.

### Step 2: Create a new elastic IP address

-   In the AWS console, create a new elastic IP address
-   Associate the new elastic IP address to the newly created instance

### Step 3: Get Instance Information

Get the following information from the instance:

-   Public IPv4 address (PIA): I'll refer to it as **PIA** (Public IP Address).
-   Public IPv4 DNS: I'll refer to it as **PID**.

### Step 4: Link your instance to your custom domain name:

-   Go to your domain provider and add the PIA to the DNS settings

### Step 5: SSH into the Instance

Using PuTTY:

-   Use the **PIA** as the Host Name.
-   Connection type is SSH.
-   Connection -> Seconds between Keepalives = 59.
-   Connection -> SSH -> Auth -> Credentials -> Private Key file = file downloaded from the Key pair when you created the EC2 instance.
-   Click "Open".
-   Login as: ubuntu.

### Step 6: Create a swap space to avoid running out of memory during bulid

Run the following commands:

-   sudo fallocate -l 1G /swapfile
-   sudo chmod 600 /swapfile
-   sudo mkswap /swapfile
-   sudo swapon /swapfile

### Step 7: Install Node.js

Run the following commands:

-   `curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -`
-   `sudo apt install nodejs`

### Step 8: Configure Git Access (Optional)

If you want to make changes with Git on the instance:

-   Create an SSH key using `ssh-keygen` command.
-   Access the public key using `cat ~/.ssh/id_rsa.pub`.
-   Add it to your GitHub account.

### Step 9: Clone Repository

Clone the repository:

-   cd into the repository
-   Run `npm i` to install all necessary dependencies for the website.

### Step 10: Install Backend Dependencies

-   Get SSL certificate for your custom domain: [instructions](https://certbot.eff.org/instructions?ws=other&os=ubuntufocal).
    -   Make note of the path to the certificate and key
-   Install NGINX reverse proxy with `sudo apt install nginx`
-   Configure NGINX to act as reverse proxy for the application

    -   Edit the `/etc/nginx/nginx.conf` file or create a new one in the `/etc/nginx/conf.d/` directory and add the following code to it for an HTTPS connection.

        ```
        server {
            listen 443;
            server_name your-domain.com;

            ssl_certificate /path/to/ssl_certificate.crt;
            ssl_certificate_key /path/to/ssl_certificate.key;

            location / {
            proxy_pass http://localhost:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            }
        }

        ```

        -   Make sure to change "your-domain.com" as well as the SSL information to match your information.

    -   Restart NGINX with `sudo service nginx restart`

### Step 11: Build and Deploy

-   Install PM2 with `sudo npm install pm2 -g`
-   Run `npm run build` to build the static files of the project.
-   Run `pm2 start npm --name "your-app-name" -- start` to start the server.
-   Use other PM2 commands as needed: `pm2 list`, `pm2 stop 'id'`, `pm2 logs`.

## Credits

This project was created by Santiago Garcia.

## Special thanks to the following technologies:

### - Node.js: https://nodejs.org/

### - Next.JS: https://nextjs.org/

### - React: https://react.dev/

### - NGINX: https://www.nginx.com/

### - CERTBOT: https://certbot.eff.org/instructions?ws=other&os=ubuntufocal
