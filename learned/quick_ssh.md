# Quickly SSH into server from WSL

### Step 1 - Put the SSH key `.pem` file in the `~/.ssh/` directory

### Step 2 - Create a `~/.ssh/config` if it doesn't exist.

-   run `touch ~/.ssh/config`

### Step 3 - Add the SSH information to the config file:

```
Host my-ec2-instance
    HostName 18.218.214.183   # Replace with your EC2 instance's public IP address
    User ubuntu               # Replace 'ubuntu' with the appropriate username for your instance
    IdentityFile /path/to/your/private/key.pem   # Replace with the path to your private key file
```

### Step 4 - SSH into the instance in one line

```
ssh my-ec2-instance
```
