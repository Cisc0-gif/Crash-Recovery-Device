#! /usr/bin/env python3

import os

root = os.getcwd()

sudo = input('Are you running this script as sudo?[y/N]: ')
if sudo == 'n' or sudo == 'N':
  print('[!]Please run this setup with sudo...')
  exit()

def wait():
  wait = input('PRESS ENTER TO CONTINUE')

print('[*]Updating, Upgrading, and Installing Packages...')
os.system('sudo apt-get update && sudo apt-get upgrade')
os.system('sudo apt-get install hostapd apache2 ssh unzip netcat aircrack-ng python3 python3-dev python3-pip php sqlite perl ntfs-3g -y')
os.system('sudo apt autoremove')
print('[+]Done!')
print('[*]Installing Libraries for Python3.7...')
os.system('sudo pip3 install -U -r requirements.txt')
print('[+]Done!')
print('[*]Configuring SSH Server Access...')
ssh_config = """\
#       : sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Protocol 2

Port 43594
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin no
#StrictModes yes
MaxAuthTries 10
#MaxSessions 10

PubkeyAuthentication yes

# Expect .ssh/authorized_keys2 to be disregarded by default in future.
#AuthorizedKeysFile     .ssh/authorized_keys .ssh/authorized_keys2

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication yes
PermitEmptyPasswords no

# Change to yes to enable challenge-response passwords (beware issues with
# some PAM modules and threads)
ChallengeResponseAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of PermitRootLogin without-password.
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
X11Forwarding no
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
PrintMotd no
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
ClientAliveInterval 300
#ClientAliveCountMax 3
#UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# Allow client to pass locale environment variables
AcceptEnv LANG LC_*

# override default of no subsystems
Subsystem       sftp    /usr/lib/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       X11Forwarding no
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server

"""
os.chdir('/etc/ssh/')
with open('sshd_config', 'w+') as f:
  f.write(sshd_config)
f.close()
print('[+]Done!')
print('[*]Configuring Hostapd Network Hosting...')
os.system('sudo mkdir /home/pi/AP_HOSTING')
os.chdir('/home/pi/AP_HOSTING')
hostapd_config = """\
# WifI interface and driver to be used
interface=wlan1
driver=nl80211

# WiFi settings
hw_mode=g
channel=6
ieee80211n=1
wmm_enabled=1
ht_capab=[HT40][SHORT-GI-20][DSSS_CCK-40]
macaddr_acl=0
ignore_broadcast_ssid=0

# Use WPA authentication and a pre-shared key
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP

# Network Name
ssid=Crash-Recovery-Device-01
# Network password
wpa_passphrase=CRD01_passw0rd
"""
with open('hostapd.conf', 'w+') as f:
  f.write(hostapd_config)
f.close()
print('[+]Done!')
print('[*]  SSID: Crash-Recovery-Device-01')
print('[*]  PSK:CRD01_passw0rd')
print('[*]  Channel: 6')
wait()
print('[*]Writing bashrc aliases...')
os.chdir('..')
os.system('sudo mkdir commands')
os.chdir('commands')
hostapd_init = """\
#! /bin/bash

echo "[*]Shutting down other network processes..."
sudo airmon-ng check kill
echo "[*]Starting network..."
sudo nohup hostapd /home/pi/AP_HOSTING/hostapd.conf &
echo "[+]Network Running!"
"""
with open('AP_init.sh', 'w+') as f:
  f.write(hostapd_init)
f.close()
os.chdir('/home/pi')
with open('.bashrc', 'a+') as f:
  f.write('alias AP_on="bash /home/pi/AP_HOSTING/AP_init.sh"')
  f.write('alias AP_off="sudo service hostapd stop"')
f.close()
print('[+]Done!')
print('[*]Commands: AP_on, AP_off')
wait()
print('[*]Moving Website Dumps to /var/www/html...')
os.chdir(root)
print('[*]  Moving www.guru99.com...')
os.system('sudo mv guru99 /var/www/html')
print('[*]  Moving www.w3schools.com...')
os.system('sudo mv w3schools /var/www/html')
print('[*]  Moving www.wilderness-survival.com...')
os.system('sudo mv wilderness-survival /var/www/html')
print('[*]  Moving www.read-the-docs.com...') #COPY RTDs for requirements.txt LIBS!
os.system('sudo mv read-the-docs /var/www/html')
print('[*]  Moving www.thenewsurvivalist.com...')
os.system('sudo mv thenewsurvivalist /var/www/html')
print('[*]  Moving www.cdc.gov...')
os.system('sudo mv cdc /var/www/html')
print('[+]Done!')
print('[*]Downloading Xowa Offline WikiDump Viewer...')
os.system('wget https://github.com/gnosygnu/xowa/releases/download/v4.6.5.1911/xowa_app_arm_v4.6.5.1911.zip')
os.system('sudo mkdir /home/pi/xowa')
os.system('sudo mv /home/pi/xowa/xowa_app_arm_v4.6.5.1911.zip xowa')
os.chdir('/home/pi/xowa')
os.system('unzip xowa_app_arm_v4.6.5.1911.zip')
print('[+]Done!')
print('[*]Use bash /home/pi/xowa/xowa_linux.sh to run')
wait()
print('[*]')

WORK_HERE -- python libs dump, DHT11, PHYSICAL_HARDWARE_WORK
