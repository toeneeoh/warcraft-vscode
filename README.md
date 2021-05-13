# warcraft-vscode

This extension is a Warcraft III map development tool set of Lua.

## Install

[![](https://vsmarketplacebadge.apphb.com/version-short/Dencer.warcraft-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=Dencer.warcraft-vscode)
[![](https://vsmarketplacebadge.apphb.com/rating-short/Dencer.warcraft-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=Dencer.warcraft-vscode)
[![](https://vsmarketplacebadge.apphb.com/installs/Dencer.warcraft-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=Dencer.warcraft-vscode)
[![](https://travis-ci.com/warcraft-iii/warcraft-vscode.svg?branch=master)](https://travis-ci.com/warcraft-iii/warcraft-vscode)
[![](https://discordapp.com/api/guilds/594229838869692466/embed.png?style=shield)](https://discord.gg/26N8ycP)

## Features

-   Compile script
-   Pack map
-   Run map
-   Open world editor
-   Add libraries

## Commands

-   **Warcraft: Create Project**
    -   Create a map project for Warcraft III
-   **Warcraft: Clean Project**
    -   Remove the `.build` folder
-   **Warcraft: Add Library**
    -   Add a library for project
-   **Warcraft: Compile Script**
    -   Compile script
-   **Warcraft: Pack Map**
    -   Compile script
    -   Pack map to w3x
-   **Warcraft: Run Map**
    -   Compile script
    -   Pack map to w3x
    -   Run map in **Warcraft III**
-   **Warcraft: Open World Editor**
    -   Open the map folder with **World Editor**
-   **Warcraft: Toggle Configuration**
    -   Toggle Configuration between with debug and release

## Quick Start

1. Press `F1` in vscode
2. Input `warcraft create` and Press `Enter` to create a Warcraft III map project
3. Open the project folder and execute the Commands of this extension

## Usage

> The extension packages all Lua files into single file, **Debug** and **Release** behave differently, **Debug** packages all Lua files in **src** folder, but **Release** automatically analyzes dependencies based on the functions `require` `dofile` `loadfile`, so if you call these functions with **NON STRING LITERALS**, you must explicitly add the list of Lua files to the `warcraft.json`

#### warcraft.json

```json
{
    "mapdir": "map.w3x",
    "files": ["main.lua"],
    "jassfile": "", // *CLASSIC* Specify the path to the war3map.j file or use it in the map file.
    "lua.package.path": ["./lib/?.lua", "./lib/?/init.lua"]
}
```

#### Lua API

> The extension implements some APIs in Lua that removed from Warcraft III, These functions are used in the same way as Lua

-   [require](https://www.lua.org/manual/5.3/manual.html#pdf-require)
-   [dofile](https://www.lua.org/manual/5.3/manual.html#pdf-dofile)
-   [loadfile](https://www.lua.org/manual/5.3/manual.html#pdf-loadfile)

> And added some functions for debug

- seterrorhandler(func)
- geterrorhandler()

#### Macros

> There are some macros in lua file.

1. In Release

    - `--@debug@` turn into `--[===[@debug@`
    - `--@end-debug@` turn into `--@end-debug@]===]`
    - `--[===[@non-debug@` turn into `--@non-debug@`
    - `--@end-non-debug@]===]` turn into `--@end-non-debug`

2. In Debug & Release
    - `--@remove@` turn into `--[===[@remove@`
    - `--@end-remove@` turn into `--@end-remove@]===]`

#### Pack

> The extension packages all files in folder named **imports** and **src/lib/\*/imports** into the map, In Configuration Release, packages the folder named **imports.release**, In Configuration Debug, it's **imports.debug**

## Libraries

-   [stdlib](https://github.com/warcraft-iii/lib-stdlib)
-   [console](https://github.com/warcraft-iii/lib-console)

## Known Issues

## TODOs

-   For Release
-   Use other github users or organizations to add libraries
-   Support compile time
-   Support for macOS

**Enjoy!**
