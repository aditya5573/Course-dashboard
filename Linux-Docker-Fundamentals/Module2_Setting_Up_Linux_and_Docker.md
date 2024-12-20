# Module 2: Setting Up Linux and Docker

## Installing Linux (Ubuntu/CentOS)

Linux is available in many different distributions (distros). In this module, we will cover two of the most popular Linux distributions: **Ubuntu** and **CentOS**. Both are widely used in development and server environments, making them great choices for Docker users.

### Installing Ubuntu
Ubuntu is one of the most user-friendly Linux distributions. Here’s how you can install it:

#### 1. **Download the Ubuntu ISO**:
   - Go to the [Ubuntu Downloads page](https://ubuntu.com/download).
   - Choose the latest LTS (Long-Term Support) version for stability.

#### 2. **Create a Bootable USB Drive**:
   - Use tools like **Rufus** (Windows), **Etcher** (Mac/Linux), or **dd** (Linux) to create a bootable USB drive with the Ubuntu ISO.

#### 3. **Boot from USB**:
   - Insert the USB drive into your machine and boot from it.
   - Follow the on-screen instructions to install Ubuntu.
   - Select language, keyboard layout, and disk partitioning (for beginners, choose the “Install Ubuntu alongside existing OS” option if you want to dual-boot).

#### 4. **Complete Installation**:
   - Set up your user credentials and timezone.
   - Once installation is complete, reboot your system and log into your new Ubuntu installation.

### Installing CentOS
CentOS is a free, open-source Linux distribution built from the sources of Red Hat Enterprise Linux (RHEL). Here's how to install CentOS:

#### 1. **Download the CentOS ISO**:
   - Visit the [CentOS Download page](https://www.centos.org/download/).
   - Select the appropriate version for your system.

#### 2. **Create a Bootable USB Drive**:
   - Use similar tools as for Ubuntu (e.g., **Rufus**, **Etcher**, **dd**) to create a bootable USB.

#### 3. **Boot from USB**:
   - Insert the USB and boot from it.
   - Follow the installation prompts to install CentOS.

#### 4. **Complete Installation**:
   - Configure your system’s network settings, disk partitioning, and user accounts.
   - After installation, reboot and log into your new CentOS system.

---

## Installing Docker on Linux

Docker provides a simple installation process for both **Ubuntu** and **CentOS**. Below are the steps for installing Docker on these systems.

### Installing Docker on Ubuntu

#### 1. **Update Your Package Index**:
   Open a terminal and run the following commands to update your system’s package index:
   ```
   sudo apt update
   ```
