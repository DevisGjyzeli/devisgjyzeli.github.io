---
layout: post
title:  "Cracking – Wireless Network using Air Crack"
date:   2016-10-29 00:00:01 +0200
categories: blog
---
To crack the WEP key a hacker needs to capture sample packets not intended for his own network interface and run crack program to compare testing keys against WEP key bundled with captured packets in attempt of decryption. The key which fits to decrypt captured packets is the key used by wireless network to encrypt its entire wireless communication with its connected stations.

The guide assumes that your have wireless network card installed and that it supports monitor mode. In this example I’m using Realtek Semiconductor Co., Ltd. RTL-8185 IEEE 802.11a/b/g Wireless LAN Controller

### **1. AIR Crack Installation**
##### **Debian:**
{% highlight ruby %}
# apt-get install aircrack-ng
{% endhighlight %}
##### **Fedora:**
{% highlight ruby %}
# yum -y install aircrack-ng
{% endhighlight %}

### **2. Identify wireless network interface**
First we need to identify name of our wireless network interface. If your wireless network card is installed correctly an iwconfig command will reveal the name of your wireless network interface:
{% highlight ruby %}
$ /sbin/iwconfig

wlan0     IEEE 802.11  Mode:Monitor  Frequency:2.437 GHz  Tx-Power=20 dBm
{% endhighlight %}

### **3. Turn on Monitor mode**
{% highlight ruby %}
# airmon-ng start wlan0

Interface       Chipset         Driver
wlan0                   rtl8180 - [phy0]
      (monitor mode enabled on mon0)
{% endhighlight %}

### **4. Identify a wireless network BSSID**
In this guide i’m are going to crack a wireless WEP key of my own network. In this step I need to identify BSSID of the network I’m intending to crack and as well as its channel number:
{% highlight ruby %}
# airodump-ng wlan0
{% endhighlight %}
Information we can retrieve from airodump-ng output:

![](/img/blog/cracking-wireless-network-using-air-crack/identify-wireless-network-BSSID.png)
##### **BASE:**
BSSID : 00:11:95:9F:FD:F4
Channel: 6
##### **STATION:**
MAC: 00:13:02:30:FF:EC
Station connected to my wireless router is my laptop with wireless network card running Debian lenny. It is important to have at least one station associated with base so we can capture packets from this communication.

### **5. Sniffing wireless network**
At this stage we can start capturing packets between base and station. The following command will start capturing packets. It is recommended to capture at least 5000 packets. Number of packets required depends on WEP key length in use. I have managed to crack WEP key 64 bits long with 10 hex characters with around 6000 captured packets. Number 6 in the following command is a channel number of our wireless base station.
{% highlight ruby %}
# airodump-ng -c 6 -w data-capture wlan0
{% endhighlight %}
![](/img/blog/cracking-wireless-network-using-air-crack/sniffing-wireless-network.png)

### **6. Injection of packets**
Capturing the packets may take some. aireplay-ng will create some traffic so we can capture more packets for a given time. Since we are hacking our own network, browsing internet on my laptop also helps to create some traffic.
{% highlight ruby %}
# aireplay-ng -3 -b 00:11:95:9F:FD:F4 -h 00:13:02:30:FF:EC wlan0
{% endhighlight %}
![](/img/blog/cracking-wireless-network-using-air-crack/injection-of-packets.png)

### **7. Crack WEP wireless key**
As a last step we crack WEP key by using captured packets and aircrack-ng command. All captured packets are now stored in data-capture-01.cap file.
NOTE: do not stop capturing process as you do not know if current amount of captured packed is satisfactory to crack WEP key.
{% highlight ruby %}
# aircrack-ng -z data-capture-01.cap
{% endhighlight %}
![](/img/blog/cracking-wireless-network-using-air-crack/crack-wep-wireless-key.png)
