---
title: "DIY DMX-Interface"
date: 2023-03-16
draft: false
project_tags: ["hardware", "how-to"]
summary: "Building a open source DMX-Interface"
links:
    repo:
        text: "Repository"
        icon: "fab alt brands fa-github"
        href: "https://github.com/daveiator/DIY-DMX-Interface-Case"
        weight: 2
---

Over the last couple of months I've really gotten to fully appreciate the simple genius of the DMX protocol. Being able to control nearly any light fixture with a single cable and software is just amazing. However the same can't exactly be said about the hardware. Interfaces are expensive and often bound to a specific software. So I've decided to build my own.

### The Plan:
Since the DMX protocol, is basically just the same as RS485, we can just use a USB to Serial adapter and connect it to a XLR connector.

...

Yes thats all there is to it. If you just want to have a working interface you can just solder the components together and you are done. Acutally a lot of people did it like that, as seen in [this blog post](https://diyprojects.tech/2013/05/diy-usb-dmx-dongle-interface-for-under-10/) where you can also find other cool case ideas.
However I wanted to make my interface to stand up to the competition so I also designed a proper slim case for it.

So, with that set, lets build a DMX-Interface for less than 10€!

### Shopping List:
| Part | Name| Picture | Where to buy |
| :-: | :-: | :-: | :-: |
| **Board** | USB to RS485 TTL Serial Converter Adapter FTDI interface FT232RL 75176 Module | <img src="img/adapter.png" alt="USB to RS485 Adapter" width="100"/> | [Ebay](https://www.ebay.de/itm/273621864836)
| **XLR-Jack** | Neutrik NC3 FD-LX | <img src="img/nc3fd-lx.png" alt="Female-XLR-jack" width="100"/> | [Thomann](https://www.thomann.de/intl/neutrik_nc3_fd_lx.htm) |
| **Screws** (Optional) | 3,5\*16mm wood screws (\*2)(shorter ones would also work) |  | Your local hardware store |
| **Wire** | Just some wire... |  | |

<br/>

##### Case:
The files for the case are available on [Github](https://github.com/daveiator/DIY-DMX-Interface-Case). I've printed my case on an Ender 3 Pro 3D-printer with 0.16mm layer thickness. No support structures are needed. When using a transparent filament you can see the activity leds of the converter.

### Building:
Since the components are the same and they do a way better job at explaning how to build it than I ever could, I'll just refer to the [previous mentioned blog](https://diyprojects.tech/2013/05/diy-usb-dmx-dongle-interface-for-under-10/).

Before putting it in the case, test the DMX-Interface if possible. After it's in the case, you can't really get to the components easily anymore.

Seperate the board an XLR-Connector by disconnecting the green terminal block. Now slide the board into the case, so that the USB-Connector is facing flush with the wall of the case. The case is designed so that it locks the board in place after connecting the terminal block to the XLR-Connector. Now the only thing left to do is screw on the XLR-Connector, sealing off the case.

And with that, congratulations! You've done it.

### What about software?
Most DMX-Software (which isn't locked to specific interfaces) should be able to connect to this interface via. the "Enttec Open DMX USB" driver . For more generic solution i've written a [small program](https://crates.io/crates/artnet_to_opendmx) which translates Art-Net-Commands to the interface. This way you can control the interface with any Art-Net compatible software. For installation use [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html):
    
        cargo install artnet_to_opendmx

### Conclusion:
Thanks for reading. I hope you enjoyed this project. If you have any questions or suggestions, feel free to contact me.
I'm also planning to offer the case as a 3D-printed kit, so if you are interested in that, let me know.

### References:
  * [DIY USB DMX Dongle Interface for under $10](https://diyprojects.tech/2013/05/diy-usb-dmx-dongle-interface-for-under-10/)
  * [Other products which use the same driver](https://wiki.openlighting.org/index.php/Products)

*Images will be added soon*