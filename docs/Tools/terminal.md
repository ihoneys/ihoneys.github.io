---
title: Terminal
date: 2020-02-08
 
categories:
 - 工具
tags:
 - Trojan

---
## Terminal 美化

有空再说！

## Terminal 使用

### 配置

- 在Terminal的标题栏点击下拉三角 => 选择设置，可以用vscode打开或者是nodepad、记事本
- 然后在文件中编辑配置表，以下是配置介绍及自用配置：

### 安装powershell 7

[下载和安装教程地址](https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msi)
这里是安装的LTS长期版

:::details

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions":
    [
        {
            "command":
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        {
            "command":
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ],
    "alwaysShowTabs": true,
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "initialCols": 95,
    "initialRows": 25,
    "profiles":
    {
      "defaults": {},
      "list":
      [
            {
                "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
                "hidden": false,
                "name": "PowerShell 7",
                "source": "Windows.Terminal.PowershellCore",
                "startingDirectory": "%USERPROFILE%",
                "acrylicOpacity": 0.10000000000000001,
                "background": "#1E90FF",
                "backgroundImage": "C:\\Users\\gjzhangt\\Pictures\\430919.png",
                "bellStyle":
                [
                    "audible",
                    "window"
                ],
                "closeOnExit": "graceful",
                "colorScheme": "Dracula",
                // "commandline": "powershell.exe",
                "cursorColor": "#FFFFFF",
                "font":
                {
                    "size": 14
                },
                "historySize": 9291,
                "padding": "15, 10, 15, 0",
                "snapOnInput": true,
                "useAcrylic": true
            },
            // {
            //     "acrylicOpacity": 0.10000000000000001,
            //     "background": "#1E90FF",
            //     "backgroundImage": "C:\\Users\\gjzhangt\\Pictures\\430919.png",
            //     "bellStyle":
            //     [
            //         "audible",
            //         "window"
            //     ],
            //     "closeOnExit": "graceful",
            //     "colorScheme": "Dracula",
            //     "commandline": "powershell.exe",
            //     "cursorColor": "#FFFFFF",
            //     "font":
            //     {
            //         "size": 14
            //     },
            //     "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            //     "hidden": false,
            //     "historySize": 9291,
            //     "name": "Windows PowerShell",
            //     "padding": "15, 10, 15, 0",
            //     "snapOnInput": true,
            //     "useAcrylic": true
            // },
            {
                "commandline": "cmd.exe",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "font":
                {
                    "size": 14
                },
                "acrylicOpacity": 0.5, //亚克力透明度
                "useAcrylic": true, //是否亚克力
                "name": "\u547d\u4ee4\u63d0\u793a\u7b26"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "font":
                {
                    "size": 14
                },
                "acrylicOpacity": 0.5, //亚克力透明度
                "useAcrylic": true, //是否亚克力
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            }
        ]
    },
    "schemes":
    [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cursorColor": "#FFFFFF",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "name": "Dracula",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "selectionBackground": "#FFFFFF",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "background": "#2C2D36",
            "black": "#000000",
            "blue": "#001D7E",
            "brightBlack": "#ABB7DA",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FA9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cursorColor": "#FFFFFF",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32DF5A",
            "name": "Dracula MOD 1",
            "purple": "#FF79C6",
            "red": "#FA9C4F",
            "selectionBackground": "#FFFFFF",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "background": "#2C2D36",
            "black": "#000000",
            "blue": "#3962E9",
            "brightBlack": "#ABB7DA",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FA9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cursorColor": "#FFFFFF",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32DF5A",
            "name": "Dracula MOD 2",
            "purple": "#FF79C6",
            "red": "#FA9C4F",
            "selectionBackground": "#FFFFFF",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ],
    "showTerminalTitleInTitlebar": true,
    "theme": "system",
    "useAcrylicInTabRow": true
}
```

:::

- 以往配置

:::details 1

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "initialRows": 25,
    //命令行窗口的行高度
    "initialCols": 110,
    //命令行窗口的宽度
    "alwaysShowTabs": true,
    //亚克力透明度
    "requestedTheme": "system",
    //Windows Terminal 窗口的颜色主题，light 和 dark 分别对应浅色和深色主题，system 是与系统设置相同
    "profiles": [
        {
            "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
            "hidden": false,
            "fontFace": "Sarasa Term SC",
            "fontSize": 14,
            "name": "PowerShell 7.1",
            "source": "Windows.Terminal.PowershellCore",
            // "commandline": "C:/Program Files/PowerShell/v7.1/powershell7.exe", //此处终端打开PS
            "useAcrylic": true, //是否亚克力
            "acrylicOpacity": 0.5, //亚克力背景透明度（需启用useAcrylic）
            // "background": "#1E90FF", //背景颜色，PS默认为蓝色
            "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
            // "colorScheme": "Dracula", //主题 / 配色方案（Dracula需导入）
            "cursorColor": "#FFFFFF", //光标颜色
            "cursorShape": "bar", //光标形状（默认为bar，即条状）
            "historySize": 9001, //缓存大小
            // "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
            // "tabTitle": "powershell!!!∑(ﾟДﾟノ)ノ", //在选项卡上显示的名称
            "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
            "snapOnInput": true, //输入的时候自动滚动到输入位置
            "startingDirectory": "%USERPROFILE%" //初始工作目录，默认为用户目录
        },
        {
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            //显示/隐藏
            "hidden": false,
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 14,
            //亚克力透明度
            "acrylicOpacity": 0.6,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell"
        },
        {
            "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
            "name": "cmd",
            "commandline": "cmd.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.8,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        },
        {
            "guid": "{469d2f0c-77cd-4b69-8139-0e9bb171616f}",
            "name": "bash",
            "commandline": "C:\\Program Files\\Git\\bin\\bash.exe",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.1,
            "useAcrylic": true,
            "icon": "C:\\Program Files\\Git\\git.jpg",
            "colorScheme": "Campbell",
            "cursorColor": "#FFFFFF"
        },
        {
            "guid": "{abf2cf97-ce51-4594-8fe4-61615d14c3df}",
            "name": "Cmder",
            "commandline": "C:\\Program Files\\cmder\\Cmder.exe",
            //字体
            "fontFace": "Sarasa Term SC",
            //字号
            "fontSize": 16,
            //亚克力透明度
            "acrylicOpacity": 0.8,
            //是否亚克力
            "useAcrylic": true,
            //主题名字
            "colorScheme": "Campbell",
            //图标地址
            "icon": "C:\\Program Files\\cmder\\cmder.jpg"
        },
        {
            "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
            "name": "Azure Cloud Shell",
            "source": "Windows.Terminal.Azure",
            "fontFace": "Anonymous Pro",
            "fontSize": 16,
            "acrylicOpacity": 0.5,
            "useAcrylic": true,
            "colorScheme": "Campbell"
        }
    ],
    // Add custom color schemes to this array
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],
    // Add any keybinding overrides to this array.
    // To unbind a default keybinding, set the command to "unbound"
    "keybindings": []
}
```

:::

:::details 2

```json
// This file was initially generated by Windows Terminal 1.1.2021.0
// It should still be usable in newer versions, but newer versions might have additional
// settings, help text, or changes that you will not see unless you clear this file
// and let us generate a new one for you.

// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
    "$schema": "https://aka.ms/terminal-profiles-schema",

        "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",

            // You can add more global application settings here.
            // To learn more about global settings, visit https://aka.ms/terminal-global-settings

            // If enabled, selections are automatically copied to your clipboard.
            "copyOnSelect": false,

                // If enabled, formatted data is also copied to your clipboard
                "copyFormatting": false,

                    // A profile specifies a command to execute paired with information about how it should look and feel.
                    // Each one of them will appear in the 'New Tab' dropdown,
                    //   and can be invoked from the commandline with `wt.exe -p xxx`
                    // To learn more about profiles, visit https://aka.ms/terminal-profile-settings
                    // Terminal 路径  C:\Users\Administrator\AppData\Local\Microsoft\WindowsApps
                    "profiles": {
        "defaults": {
            // Put settings here that you want to apply to all profiles.
        },
        "list": [
            {
                // Make changes here to the powershell.exe profile.
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", //唯一标识符，随机生成
                "name": "powershell!!!∑(ﾟДﾟノ)ノ", //在下拉菜单里显示的名称
                "commandline": "C:/Program Files/PowerShell/v7.1/powershell7.exe", //此处终端打开PS
                "hidden": false,
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "DEJAVU SANS MONO FOR POWERLINE", //所用字体
                "fontSize": 14, //字体大小
                "historySize": 9001, //缓存大小
                "icon": "ms-appx:///ProfileIcons/{61c54bbd-c2c6-5271-96e7-009a87ff44bf}.png", //图标
                "tabTitle": "好厉害的powershell!!!∑(ﾟДﾟノ)ノ", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            },
            {
                // Make changes here to the cmd.exe profile.
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "name": "(〃´-ω･)cmd",
                "commandline": "cmd.exe",
                "hidden": false,
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 14, //字体大小
                "historySize": 9001, //缓存大小
                "tabTitle": "(〃´-ω･) 安逸的cmd", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            },
            {
                "guid": "{f323ab3c-9641-4904-a3a6-dc4e4992b6ae}",
                "hidden": false,
                "name": "(✪ω✪)git",
                "commandline": "F:/Develop/Git/Git/git-bash.exe",
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": false, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 16, //字体大小
                "historySize": 9001, //缓存大小
                "tabTitle": "(✪ω✪)拐一批的git", //在选项卡上显示的名称
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true, //使用亚克力效果
                "icon": "F:/Develop/Git/Git/git.jpg"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure",
                "acrylicOpacity": 0.1, //亚克力背景透明度（需启用useAcrylic）
                "background": "#1E90FF", //背景颜色，PS默认为蓝色
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "colorScheme": "Dracula", //配色方案（Dracula需导入）
                "cursorColor": "#FFFFFF", //光标颜色
                "cursorShape": "bar", //光标形状（默认为bar，即条状）
                "fontFace": "Consolas", //所用字体
                "fontSize": 16, //字体大小
                "historySize": 9001, //缓存大小
                "padding": "0, 0, 0, 0", //内容的边框距，默认填充全部空间
                "snapOnInput": true, //输入的时候自动滚动到输入位置
                "startingDirectory": "%USERPROFILE%", //初始工作目录，默认为用户目录
                "useAcrylic": true //使用亚克力效果
            }
        ]
    },
    // Add custom color schemes to this array.
    // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],

        // Add custom keybindings to this array.
        // 将自定义键绑定添加到此数组
        // To unbind a key combination from your defaults.json, set the command to "unbound".
        // 要从defaults.json取消组合键，请将命令设置为“ unbound”
        // To learn more about keybindings, visit https://aka.ms/terminal-keybindings
        // 要了解有关键绑定的更多信息，请访问https://aka.ms/terminal-keybindings
        "keybindings": [
            // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
            // 复制和粘贴绑定到defaults.json中的Ctrl + Shift + C和Ctrl + Shift + V
            // These two lines additionally bind them to Ctrl+C and Ctrl+V.
            // 另外这两行将它们绑定到Ctrl + C和Ctrl + V。
            // To learn more about selection, visit https://aka.ms/terminal-selection
            { "command": { "action": "copy", "singleLine": false }, "keys": "ctrl+c" },
            { "command": "paste", "keys": "ctrl+v" },

            // Press Ctrl+Shift+F to open the search box
            { "command": "find", "keys": "ctrl+shift+f" },

            // Press Alt+Shift+D to open a new pane.按Alt + Shift + D打开一个新窗格。
            // - "split": "auto" makes this pane open in the direction that provides the most surface area.
            // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
            // To learn more about panes, visit https://aka.ms/terminal-panes
            { "command": { "action": "splitPane", "split": "auto", "splitMode": "duplicate" }, "keys": "alt+shift+d" }
        ]
}

```

:::

:::details 3

```json
// This file was initially generated by Windows Terminal 1.4.3243.0
// It should still be usable in newer versions, but newer versions might have additional
// settings, help text, or changes that you will not see unless you clear this file
// and let us generate a new one for you.
// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    // 您可以在此处添加更多全局应用程序设置。
    // 要了解有关全局设置的更多信息，请访问https://aka.ms/terminal-global-settings
    "initialRows": 25,
    //命令行窗口的行高度
    "initialCols": 110,
    //命令行窗口的宽度
    "theme": "system",
    "alwaysShowTabs": true,
    "requestedTheme": "light",
    //Windows Terminal 窗口的颜色主题，light 和 dark 分别对应浅色和深色主题，system 是与系统设置相同
    // 如果启用，选择将自动复制到剪贴板。
    "copyOnSelect": false,
    // 如果启用，格式化的数据也将复制到剪贴板
    "copyFormatting": false,
    //配置文件指定要执行的命令以及有关其外观的信息。
    // 其中每个都会显示在“新标签”下拉列表中
    // 可以从命令行使用wt.exe -p xxx来调用
    // 要了解有关配置文件的更多信息，请访问https://aka.ms/terminal-profile-settings
    "useAcrylic": true, //是否亚克力
    "profiles": {
        "defaults": {
            // Put settings here that you want to apply to all profiles.
        },
        "list": [
            {
                // 配置 powershell 7.1
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                // 添加自定义终端时可以在网上找一个自动生成guid的工具，生成一个，配置里没有或者重复会报错
                "fontFace": "Sarasa Term SC", //Sarasa Term  SCJetBrains Mono
                "hidden": false, //显示/隐藏
                "fontSize": 14, //字号
                "name": "PowerShell 7.1", //标题名字
                "useAcrylic": true, //是否亚克力
                // "acrylicOpacity": 0.4, //亚克力背景透明度（需启用useAcrylic）
                // "colorScheme": "Dracula", //主题 / 配色方案（Dracula需导入）
                "closeOnExit": true, //关闭窗口的时候退出所有挂载的程序
                "historySize": 9001, //缓存大小
                "padding": "15, 10, 15, 0", //左 上 右 下 -- 内容的边框距，默认填充全部空间
                // 背景图片地址
                "backgroundImage": "D:\\Administrator\\Pictures\\Camera Roll\\430919.png",
                // 背景图扩展模式
                "backgroundImageStretchMode": "fill",
                // 应用程序所在地址
                "commandline": "C:\\Program Files\\PowerShell\\7\\pwsh.exe"
                // "startingDirectory": "%USERPROFILE%" //初始工作目录，默认为用户目录
            },
            {
                // 配置 PowerShell
                "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
                "name": "PowerShell",
                "fontFace": "Sarasa Term SC", //字体
                "fontSize": 14, //字号
                "acrylicOpacity": 0.6, //亚克力透明度
                "useAcrylic": true, //是否亚克力
                "source": "Windows.Terminal.PowershellCore",
                "hidden": false
            },
            {
                // 配置 cmd
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "name": "Command Prompt",
                "fontFace": "Sarasa Term SC", //字体
                "fontSize": 14, //字号
                "acrylicOpacity": 0.6, //亚克力透明度
                "useAcrylic": true, //是否亚克力
                "commandline": "cmd.exe",
                "hidden": false
            },
            {
                // 配置 Azure Cloud Shell
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "fontFace": "Sarasa Term SC", //字体
                "fontSize": 14, //字号
                "acrylicOpacity": 0.6, //亚克力透明度
                "useAcrylic": true, //是否亚克力
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure",
                "hidden": false
            }
        ]
    },
    // Add custom color schemes to this array.
    // 自定义颜色主题
    // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
    "schemes": [
        {
            "name": "Dracula MOD 1",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#001d7e",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula MOD 2",
            "background": "#2c2d36",
            "black": "#000000",
            "blue": "#3962e9",
            "brightBlack": "#abb7da",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#fa9090",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#32df5a",
            "purple": "#FF79C6",
            "red": "#fa9c4f",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        },
        {
            "name": "Dracula",
            "background": "#282A36",
            "black": "#21222C",
            "blue": "#BD93F9",
            "brightBlack": "#6272A4",
            "brightBlue": "#D6ACFF",
            "brightCyan": "#A4FFFF",
            "brightGreen": "#69FF94",
            "brightPurple": "#FF92DF",
            "brightRed": "#FF6E6E",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFFA5",
            "cyan": "#8BE9FD",
            "foreground": "#F8F8F2",
            "green": "#50FA7B",
            "purple": "#FF79C6",
            "red": "#FF5555",
            "white": "#F8F8F2",
            "yellow": "#F1FA8C"
        }
    ],
    // Add custom actions and keybindings to this array.
    // To unbind a key combination from your defaults.json, set the command to "unbound".
    // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
    "actions": [
        // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
        // 复制和粘贴绑定到defaults.json中的Ctrl + Shift + C和Ctrl + Shift + V。
        // These two lines additionally bind them to Ctrl+C and Ctrl+V.
        // 另外这两行将它们绑定到Ctrl + C和Ctrl + V。
        // To learn more about selection, visit https://aka.ms/terminal-selection
        // 设置 复制和粘贴的快捷键
        {
            "command": {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        // Press Ctrl+Shift+F to open the search box
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        // Press Alt+Shift+D to open a new pane.
        // - "split": "auto" makes this pane open in the direction that provides the most surface area.
        // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
        // To learn more about panes, visit https://aka.ms/terminal-panes
        {
            "command": {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            // 单窗口分屏可自定义
            "keys": "alt+shift+d"
        }
    ]
}

```

:::

- 配置文件位置

`Windows Terminal`的配置文件储存在:

```js
用户名\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\RoamingState\profiles.json
```

### 分屏和快捷键

| 操作                   | 快捷键                                            |
| :--------------------- | :------------------------------------------------ |
| 添加分屏(垂直水平交替) | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>D</kbd>  |
| 垂直分屏               | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>+</kbd>  |
| 水平分屏               | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>-</kbd>  |
| 调整分屏               | <kbd>Shift</kbd> + <kbd>Alt</kbd> + `方向键`      |
| 切换分屏               | <kbd>Alt</kbd> +  `方向键`                        |
| 关闭分屏               | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd> |
