---
title: 变量常用命名一
date: 2018-05-16
tags:
 - Namespace
---

[Codelf:变量命名](https://unbug.github.io/codelf/)

[变量大小转换工具](https://www.iamwawa.cn/daxiaoxie.html)

## 命名规则

目前共有四种命名法则：`驼峰命名法`、`匈牙利命名法`、`帕斯卡命名法`和`下划线命名法`，其中前三种是较为流行的命名法。

1. 驼峰命令法

正如它的名称所表示的那样，是指混合使用大小写字母来构成变量和函数的名字。

例如，下面是分别用骆驼式命名法和下划线法命名的同一个函数：

```js
printEmployeePaychecks()；
print_employee_paychecks()；
```

第一个函数名使用了驼峰命名法，函数名中的每一个逻辑断点都有一个大写字母来标记。第二个函数名使用了下划线法，函数名中的每一个逻辑断点都有一个下划线来标记。

驼峰命名法近年来越来越流行了，在许多新的函数库和`Microsoft Windows`这样的环境中，它使用得当相多。另一方面，下划线法是`C`出现后开始流行起来的，在许多旧的程序和`UNIX`这样的环境中，它的使用非常普遍。

2. 匈牙利命名法

广泛应用于象`Microsoft Windows`这样的环境中。`Windows` 编程中用到的变量(还包括宏)的命名规则为匈牙利命名法，这种命名技术是由一位能干的 `Microsoft` 程序员查尔斯-西蒙尼(`Charles Simonyi`) 提出的。

匈牙利命名法通过在变量名前面加上相应的小写字母的符号标识作为前缀，标识出变量的作用域、类型等。这些符号可以多个同时使用，顺序是先`m_`(成员变量)、再指针、再简单数据类型、再其它。这样做的好处在于能增加程序的可读性，便于对程序的理解和维护。

例如：`m_lpszStr`, 表示指向一个以`0`字符结尾的字符串的长指针成员变量。

匈牙利命名法关键是：标识符的名字以一个或者多个小写字母开头作为前缀；前缀之后的是首字母大写的一个单词或多个单词组合，该单词要指明变量的用途。

3. 帕斯卡(`pascal`)命名法

与驼峰命名法类似，二者的区别在于：驼峰命名法是首字母小写，而帕斯卡命名法是首字母大写，如：

```js
DisplayInfo();
string UserName;
```

二者都是采用了帕斯卡命名法。

- 三种命名规则的小结：
`MyData`就是一个帕斯卡命名的示例；`myData`是一个驼峰命名法,它第一个单词的第一个字母小写,后面的单词首字母大写,看起来像一个骆驼；`iMyData`是一个匈牙利命名法,它的小写的`i`说明了它的型态，后面的和帕斯卡命名相同，指示了该变量的用途。

## 命名的基本原则

1. 标识符的命名要清晰、明了，有明确含义，同时使用完整的单词或大家基本可以理解的缩写，避免使人产生误解——尽量采用采用英文单词或全部中文全拼表示，若出现英文单词和中文混合定义时，使用连字符`_`将英文与中文割开。较短的单词可通过去掉“元音”形成缩写；较长的单词可取单词的头几个字母形成缩写；一些单词有大家公认的缩写。例如：`temp->tmp`、`flag->flg`、`statistic->stat`、`increment->inc`、`message->msg`等缩写能够被大家基本认可。

2. 命名中若使用特殊约定或缩写，则要有注释说明。应该在源文件的开始之处，对文件中所使用的缩写或约定，特别是特殊的缩写，进行必要的注释说明。

3. 命名规范必须与所使用的系统风格保持一致，并在同一项目中统一。

4. 对于变量命名，禁止取单个字符(如`i` 、`j` 、`k`... )，建议除了要有具体含义外，还能表明其变量类型、数据类型等，但`i` 、`j` 、`k` 作局部循环变量是允许的。变量，尤其是局部变量，如果用单个字符表示，很容易敲错(如`i`写成`j`)，而编译时又检查不出来，有可能为了这个小小的错误而花费大量的查错时间。

:::danger 警告
下面是常用的的命名，约定好后，再使用简写命名，否则不建议使用！！
:::

## 运算

| 英文             | 简写   | 含义                         |
| :--------------- | :----- | :--------------------------- |
| `multiplication` | `mul`  | 乘                           |
| `division`       | `div`  | 除                           |
| `addition`       | `add`  | 加法/添加                    |
| `subtraction`    | `sub`  | 减                           |
| `delete`         | `del`  | 删除                         |
| `increase`       | `inc`  | 增加；增大；提高；增强       |
| `decrease`       | `dec`  | 减少，减小；减少量；减少过程 |
| `increment`      | `inc`  | 增加、增量                   |
| `decrement`      | `inc`  | 渐减；减缩；衰减率           |
| `average`        | `avg`  | 平均                         |
| `float`          | `flt`  | 浮动、浮点                   |
| `point`          | `pt`   | 点                           |
| `number`         | `num`  | 数量、编号                   |
| `maximum`        | `max`  | 最大值                       |
| `middle`         | `mid`  | 中值                         |
| `minimum`        | `min`  | 最小值                       |
| `statistic`      | `stat` | 统计                         |
| `average`        | `avg`  | 平均数                       |
| `count`          | `cnt`  | 计数器 计算                  |
| `Total`          |        | 总数 合计                    |
| `calculate`      | `calc` | 计算                         |
| `summation`      | `sum`  | 和                           |

## 数据类型

| 英文          | 简写   | 含义           |
| :------------ | :----- | :------------- |
| `number`      | `num`  | 数字，数，数量 |
| `string`      | `str`  | 字符串         |
| `object`      | `obj`  | 对象           |
| `date`        | `dat`  | 日期           |
| `function`    | `func` | 函数           |
| `character`   | `char` | 字符           |
| `hexadecimal` | `hex`  | 十六进制       |
| `array`       | `arr`  | 数组、集合     |

## 权限

| 英文            | 简写   | 含义         |
| :-------------- | :----- | :----------- |
| `root`          | `root` | 管理员       |
| `administrator` | `adm`  | 管理员       |
| `user`          | `usr`  | 用户         |
| `password`      | `pwd`  | 密码         |
| `database`      | `db`   | 数据库       |
| `list`          | `lst`  | 列表         |
| `server`        | `srv`  | 服务         |
| `escape`        | `esc`  | 退出         |
| `manager`       | `mgr`  | 管理者       |
| `status`        | `stat` | 状态         |
| `dictionary`    | `dict` | 字典         |
| `oracle`        | `ora`  | 甲骨文数据库 |

## js 变量

| 英文           | 简写        | 含义       |
| :------------- | :---------- | :--------- |
| `answer`       | `ans`       | 响应、回答 |
| `buffer`       | `buf或buff` | 缓冲区     |
| `capture`      | `cap或capt` | 捕获       |
| `check`        | `chk`       | 检查       |
| `row`          | `row`       | 行         |
| `column`       | `col`       | 列         |
| `control`      | `ctrl`      | 控制       |
| `decode`       | `dec`       | 解码、译码 |
| `define`       | `def`       | 定义       |
| `delete`       | `del`       | 删除       |
| `destination`  | `dst或dest` | 目的       |
| `display`      | `disp`      | 显示       |
| `encode`       | `enc`       | 编码       |
| `environment`  | `env`       | 环境       |
| `error`        | `err`       | 错误       |
| `frequency`    | `freq`      | 频率       |
| `header`       | `hdr`       | 开始、开头 |
| `image`        | `img`       | 影像、镜像 |
| `initalize`    | `init`      | 初始化     |
| `iteration`    | `itr`       | 循环、迭代 |
| `length`       | `len`       | 长度       |
| `memory`       | `mem`       | 内存       |
| `make`         | `mk`        | 制造、形成 |
| `message`      | `msg`       | 消息       |
| `operand`      | `opnd`      | 操作数     |
| `optimization` | `opt`       | 最优       |
| `operator`     | `optr`      | 操作       |
| `packet`       | `pkt`       | 消息包     |
| `previous`     | `pre或prev` | 以前的     |
| `pointer`      | `ptr`       | 指针       |
| `record`       | `rcd`       | 记录       |
| `receive`      | `recv`      | 收到、接收 |
| `result`       | `res`       | 结果       |
| `return`       | `ret`       | 返回       |
| `source`       | `src`       | 源头       |
| `stack`        | `stk`       | 栈         |
| `table`        | `tab`       | 表         |
| `temporary`    | `tmp或temp` | 临时       |
| `total`        | `tot`       | 全部的     |
| `time stamp`   | `ts`        | 时间戳     |
| `value`        | `val`       | 值         |
| `variable`     | `var`       | 变量       |
| `index`        | `idx / ndx` | 索引、指示 |
| `argument`     | `arg`       | 参数(形参) |
| `parameter`    | `param`     | 实参       |
| `Sourse`       | `Src`       | 源         |
| `Set`          | `Set`       | 设置       |
| `Setting`      | `Setting`   | 设置       |
| `Overflow`     | `Ovf`       | 溢出       |

## 控件命名

| 英文                | 简写                  | 含义         |
| :------------------ | :-------------------- | :----------- |
| `calendar`          | `cdr`                 | 日历         |
| `messageDialog`     | `msgdlg`              | 消息框       |
| `drawer`            | `drw`                 | 抽屉         |
| `buttonGroup`       | `btngrp`              | 按钮分组     |
| `checkBox`          | `chk`                 | 复选框       |
| `container`         | `cntr`                | 容器         |
| `button`            | `btn`                 | 按钮         |
| `comboBox`          | `cmb`                 | 下拉框       |
| `lable`             | `lbl`                 | 标签         |
| `progressBar`       | `prg`                 | 进度条       |
| `pageIndicator`     | `pgindic`             | Tab分页控件  |
| `radioButton`       | `rdo`                 | 单选框       |
| `rangeSlider`       | `rngsld`              | 滑块         |
| `scrollView`        | `svw`                 | 视图滚动     |
| `scrollBar`         | `vsb(垂直)/hsb(水平)` | 滚动条       |
| `slider`            | `sld`                 | 滑动器       |
| `spinBox`           | `spn`                 | 旋转框       |
| `splitView`         | `spltvw`              | 分割视图     |
| `stackView`         | `stackvw`             | 堆栈视图     |
| `statusBar`         | `statbr`              | 状态条       |
| `swipeView`         | `swpvw`               | 滑动控件     |
| `switch`            | `sw`                  | 开关         |
| `tabBar`            | `tbbr`                | tab栏        |
| `textField`         | `txtfld`              | 文本输入框   |
| `toolBar`           | `tlbr`                | 工具栏       |
| `toolTip`           | `tltp`                | 提示框       |
| `toolButton`        | `tlbtn`               | 工具按钮     |
| `treeView`          | `trvw`                | 树形视图     |
| `layout`            | `lyt`                 | 布局         |
| `mainMenu`          | `mmnu`                | 菜单栏       |
| `groupBox`          | `gbx`                 | 组合框       |
| `pictureBox`        | `pic`                 | 图片框       |
| `listView`          | `lvw`                 | 列表视图     |
| `window`            | `win(wnd)`            | 窗口         |
| `form`              | `frm`                 | 表单         |
| `textBox`           | `txt`                 | 文本框       |
| `linkLabel`         | `llbl`                | 超链接标签框 |
| `dialog`            | `dlg`                 | 对话框       |
| ` scrollIndicator ` | `scrlindic`           | 滚动指示器   |

## 其他命名

| 英文                | 简写       | 含义      |
| :------------------ | :--------- | :-------- |
| `positon`           | `pos`      | 位置      |
| `address`           | `addr`     | 地址      |
| `destination`       | `dest/dst` | 目的地    |
| `application`       | `app`      | 应用程序  |
| `asynchronization`  | `asyn`     | 异步      |
| `bitmap`            | `bmp`      | 位图      |
| `buffer`            | `buf`      | 缓冲区    |
| `color`             | `clr`      | 颜色      |
| `command`           | `cmd`      | 命令      |
| `device`            | `dev`      | 设备      |
| `different`         | `diff`     | 不同的    |
| `directory`         | `dir`      | 目录      |
| `document`          | `doc`      | 文档      |
| `dynamic`           | `dyna`     | 动态的    |
| `execute`           | `exec`     | 执行      |
| `group`             | `grp`      | 组        |
| `image`             | `img`      | 图像      |
| `information`       | `info`     | 信息      |
| `initialize`        | `init`     | 初始化    |
| `library`           | `lib`      | 库        |
| `message`           | `msg`      | 消息      |
| `package`           | `pkg`      | 打包      |
| `position`          | `pos`      | 位置      |
| `previous`          | `pre`      | 前一个    |
| `process/Procedure` | `proc`     | 进程/过程 |
| `pointer`           | `ptr`      | 指针      |
| `password`          | `pwd`      | 密码      |
| `public`            | `pub`      | 公共的    |
| `reference`         | `ref`      | 引用      |
| `source`            | `src`      | 源        |
| `synchronization`   | `sync`     | 同步      |
| `Synchronize`       | `Synch`    | 同步      |
| `system`            | `sys`      | 系统      |
| `table`             | `tbl`      | 表格      |
| `temporary`         | `tmp`      | 临时      |
| `text`              | `txt`      | 文本      |
| `configuration`     | `config`   | 配置      |
| `control`           | `ctrl`     | 控制      |
| `original`          | `orig`     | 原件      |
| `return`            | `rtn`      | 返回      |
| `repeat`            | `rpt`      | 重复      |
| `signal`            | `sig`      | 信号      |
| `standard`          | `std`      | 标准      |
| `trigger`           | `trig`     | 触发      |
| `background`        | `bg`       | 背景      |
| `insert`            | `ins`      | 插入      |
| `back`              | `bk`       | 返回      |
| `break`             | `brk`      | 间断      |
| `edit`              | `edt`      | 编辑      |
| `flag`              | `flg`      | 标志      |
| `grid`              | `grd`      | 网格      |
| `panorama`          | `pano`     | 全景      |
| `print`             | `prn`      | 打印      |
| `program`           | `prg`      | 程序      |
| `change`            | `chg`      | 改变      |
| `click`             | `clk`      | 点击      |
| `compare`           | `cmp`      | 比较      |
| `coordinates`       | `coord`    | 坐标      |
| `copy`              | `cpy`      | 复制      |
| `current`           | `cur`      | 当前的    |
| `display`           | `disp`     | 显示      |
| `driver`            | `drv`      | 驱动      |
| `extend`            | `ex/ext`   | 扩展      |
| `frame`             | `frm`      | 框架/帧   |
| `instance`          | `ins`      | 实例      |
| `link`              | `lnk`      | 链接      |
| `resource`          | `res`      | 资源      |
| `select`            | `sel`      | 选择      |
| `test`              | `tst`      | 测试      |
| `horizontal`        | `horz`     | 水平      |
| `vertical`          | `vert`     | 垂直      |
| `Version`           | `Ver`      | 版本      |
| `Utility`           | `Util`     | 有用      |
| `Up`                | `Up`       | 上        |
| `Down`              | `Down`     | 下        |
| `Update`            | `Update`   | 更新\升级 |
| `Watchdog`          | `Wdog`     | 看门狗    |
| `Unlock`            | `Unlock`   | 解锁      |
| `lock`              | `lock`     | 锁定      |
| `Time`              | `Time`     | 时间      |
| `Timer`             | `Tmr`      | 计时器    |
| `Toggle`            | `Tgl`      | 切换      |
| `Task`              | `Task`     | 任务      |
| `Threshold`         | `Th`       | 阀        |

## 其他常用单词

| 序号 | 描述                        | 缩写词     | 中文 |
| :--- | :-------------------------- | :--------- | :--- |
| A    | `Addition`                  | `Add‍`      |      |
|      | `Accumulator`               | `Acc`      |      |
|      | `Address`                   | `Addr`     |      |
|      | `Action`                    | `Act`      |      |
|      | `Active`                    | `Act`      |      |
|      | `Amplitude`                 | `Amp`      |      |
|      | `Analog Input`              | `AI`       |      |
|      | `Anolog I/O`                | `AIO`      |      |
|      | `All`                       | `All`      |      |
|      | `Alarm`                     | `Alm`      |      |
|      | `Allocate`                  | `Alloc`    |      |
|      | `Analog Output`             | `AO`       |      |
|      | `Apparent`                  | `App`      |      |
|      | `Argument`                  | `Arg`      |      |
|      | `Arrange`                   | `Arrng`    |      |
|      | `Array`                     | `Array`    |      |
|      | `Assemble`                  | `Asm`      |      |
|      | `Attribute`                 | `Attrib`   |      |
| B    | `Bar`                       | `Bar`      |      |
|      | `Bit`                       | `Bit`      |      |
|      | `Block`                     | `Blk`      |      |
|      | `Buffer`                    | `Buf`      |      |
|      | `Button`                    | `Btn`      |      |
|      | `Bypass`                    | `Bypass`   |      |
| C    | `Calibration`               | `Cal`      |      |
|      | `Calculate`                 | `Calc`     |      |
|      | `Configuration`             | `Cfg`      |      |
|      | `Channel`                   | `Ch`       |      |
|      | `Change`                    | `Chg`      |      |
|      | `Check`                     | `Chk`      |      |
|      | `Clock`                     | `Clk`      |      |
|      | `Clear`                     | `Clr`      |      |
|      | `Clear Screen`              | `Cls`      |      |
|      | `Command`                   | `Cmd`      |      |
|      | `Compare`                   | `Cmp`      |      |
|      | `Complete`                  | `Comp`     |      |
|      | `Count`                     | `Cnt`      |      |
|      | `Counter`                   | `Ctr`      |      |
|      | `Column`                    | `Col`      |      |
|      | `Communication`             | `Comm`     |      |
|      | `Connect`                   | `Con`      |      |
|      | `Construct`                 | `Cons`     |      |
|      | `Control`                   | `Ctrl`     |      |
|      | `Context`                   | `Ctx`      |      |
|      | `Convert`                   | `Conv`     |      |
|      | `Copy`                      | `Cp`       |      |
|      | `Current`                   | `Cur`      |      |
|      | `Cursor`                    | `Csr`      |      |
|      | `Control Word`              | `CW`       |      |
| D    | `Date`                      | `Date`     |      |
|      | `Day`                       | `Day`      |      |
|      | `Debounce`                  | `Debounce` |      |
|      | `Decrease`                  | `Dec`      |      |
|      | `Decimal`                   | `Dec`      |      |
|      | `Decode`                    | `Decode`   |      |
|      | `Define`                    | `Def`      |      |
|      | `Degree`                    | `Deg`      |      |
|      | `Delete`                    | `Del`      |      |
|      | `Destination`               | `Dst`      |      |
|      | `Descriptor`                | `Desc`     |      |
|      | `Device`                    | `Dev`      |      |
|      | `Discrete Input`            | `DI`       |      |
|      | `Digit`                     | `Dig`      |      |
|      | `Discrete I/O`              | `DIO`      |      |
|      | `Discrete Output(s)`        | `DO`       |      |
|      | `Disable`                   | `Dis`      |      |
|      | `Display`                   | `Disp`     |      |
|      | `Discovery`                 | `Disc`     |      |
|      | `Division`                  | `Div`      |      |
|      | `Divisor/Division`          | `Div`      |      |
|      | `Delay`                     | `Dly`      |      |
|      | `Day-of-week`               | `DOW`      |      |
|      | `Down`                      | `Down`     |      |
|      | `Dummy`                     | `Dummy`    |      |
|      | `Dynamic`                   | `Dyn`      |      |
| E    | `Edge`                      | `Edge`     |      |
|      | `Effective`                 | `Eff`      |      |
|      | `Electric`                  | `Elec`     |      |
|      | `Empty`                     | `Empty`    |      |
|      | `Enable`                    | `En`       |      |
|      | `Engine`                    | `Eng`      |      |
|      | `Enter`                     | `Enter`    |      |
|      | `Entries`                   | `Entries`  |      |
|      | `Equivalent`                | `Equiv`    |      |
|      | `Error(s)`                  | `Err`      |      |
|      | `Ethernet`                  | `Eth`      |      |
|      | `Engineering Units`         | `EU`       |      |
|      | `Event(s)`                  | `Event`    |      |
|      | `Extension`                 | `Ext`      |      |
|      | `Exit`                      | `Exit`     |      |
|      | `Exception`                 | `Exc`      |      |
|      | `Expiration`                | `Exp`      |      |
|      | `Exponent`                  | `Exp`      |      |
| F    | `Field`                     | `Fld`      |      |
|      | `Flag`                      | `Flag`     |      |
|      | `Flush`                     | `Flush`    |      |
|      | `Function(s)`               | `Fnct`     |      |
|      | `Format`                    | `Format`   |      |
|      | `Fraction`                  | `Fract`    |      |
|      | `Free`                      | `Free`     |      |
|      | `Frequency`                 | `Freq`     |      |
|      | `Full`                      | `Full`     |      |
| G    | `Gain`                      | `Gain`     |      |
|      | `Get`                       | `Get`      |      |
|      | `Generate`                  | `Gen`      |      |
|      | `Group(s)`                  | `Grp`      |      |
| H    | `Handler`                   | `Handler`  |      |
|      | `Harmonic`                  | `Harm`     |      |
|      | `Hexadecimal`               | `Hex`      |      |
|      | `High`                      | `Hi`       |      |
|      | `History`                   | `Hist`     |      |
|      | `Hit`                       | `Hit`      |      |
|      | `High Priority Task`        | `HPT`      |      |
|      | `Hour(s)`                   | `Hr`       |      |
| I    | `I.D.`                      | `Id`       |      |
|      | `Idle`                      | `Idle`     |      |
|      | `Impulse`                   | `Imp`      |      |
|      | `Input(s)`                  | `In`       |      |
|      | `Initialization`            | `Init`     |      |
|      | `Initialize`                | `Init`     |      |
|      | `Instruction`               | `Instr`    |      |
|      | `Interrupt`                 | `Int`      |      |
|      | `Invert`                    | `Inv`      |      |
|      | `Interrupt Service Routine` | `ISR`      |      |
|      | `Index`                     | `Ix`       |      |
| K    | `Key`                       | `Key`      |      |
|      | `Keyboard`                  | `Key`      |      |
| L    | `Length`                    | `Len`      |      |
|      | `Limit`                     | `Lim`      |      |
|      | `List`                      | `List`     |      |
|      | `Low`                       | `Lo`       |      |
|      | `Lower`                     | `Le`       |      |
|      | `Lowest`                    | `Lo`       |      |
|      | `Lock`                      | `Lock`     |      |
|      | `Low Priority Task`         | `LTP`      |      |
| M    | `Magnitude`                 | `Mag`      |      |
|      | `Mantissa`                  | `Man`      |      |
|      | `Manual`                    | `Man`      |      |
|      | `Manufacture`               | `Mfg`      |      |
|      | `Maximum`                   | `Max`      |      |
|      | `Mailbox`                   | `Mbox`     |      |
|      | `Minimum`                   | `Min`      |      |
|      | `Mode`                      | `Mode`     |      |
|      | `Month`                     | `Month`    |      |
|      | `Move`                      | `Mov`      |      |
|      | `Message`                   | `Msg`      |      |
|      | `Measure`                   | `Meas`     |      |
|      | `Mask`                      | `Msk`      |      |
|      | `Multiplication`            | `Mul`      |      |
|      | `Multiplex`                 | `Mux`      |      |
|      | `Make`                      | `Mk`       |      |
| N    | `Negative`                  | `Neg`      |      |
|      | `Number of`                 | `Num`      |      |
|      | `Nesting`                   | `Nesting`  |      |
|      | `Neutral`                   | `Neut`     |      |
|      | `New`                       | `New`      |      |
|      | `Next`                      | `Next`     |      |
| O    | `Offset`                    | `Offset`   |      |
|      | `Old`                       | `Old`      |      |
|      | `Operation System`          | `OS`       |      |
|      | `Optimize`                  | `Opt`      |      |
|      | `Original`                  | `Orig`     |      |
|      | `Output`                    | `Out`      |      |
|      | `Overflow`                  | `Ovf`      |      |
| P    | `Package`                   | `Pkg`      |      |
|      | `Parameter`                 | `Param`    |      |
|      | `Pass`                      | `Pass`     |      |
|      | `Performance`               | `Perf`     |      |
|      | `Period`                    | `Per`      |      |
|      | `Phase`                     | `Ph`       |      |
|      | `Port`                      | `Port`     |      |
|      | `Position`                  | `Pos`      |      |
|      | `Positive`                  | `Pos`      |      |
|      | `Power`                     | `Pwr`      |      |
|      | `Previous`                  | `Prev`     |      |
|      | `Priority`                  | `Prio`     |      |
|      | `Printer`                   | `Prt`      |      |
|      | `process`                   | `Proc`     |      |
|      | `Product`                   | `Prod`     |      |
|      | `Protocol`                  | `Prot`     |      |
|      | `Pointer`                   | `Ptr`      |      |
|      | `Put`                       | `Put`      |      |
| Q    | `Queue`                     | `Q`        |      |
|      | `Quality`                   | `Qlty`     |      |
|      | `Quarter`                   | `Quar`     |      |
| R    | `Raw`                       | `Raw`      |      |
|      | `Reactive`                  | `React`    |      |
|      | `Recall`                    | `Rcl`      |      |
|      | `Rectangle`                 | `Rect`     |      |
|      | `Read`                      | `Rd`       |      |
|      | `Ready`                     | `Rdy`      |      |
|      | `Reference`                 | `Ref`      |      |
|      | `Register`                  | `Reg`      |      |
|      | `Request`                   | `Req`      |      |
|      | `Reset`                     | `Reset`    |      |
|      | `Reserve`                   | `Resv`     |      |
|      | `Resume`                    | `Resume`   |      |
|      | `Response`                  | `Resp`     |      |
|      | `Return`                    | `Rtn`      |      |
|      | `Reverse`                   | `Revs`     |      |
|      | `Ring`                      | `Ring`     |      |
|      | `Row`                       | `Row`      |      |
|      | `Repeat`                    | `Rpt`      |      |
|      | `Real-Time`                 | `RT`       |      |
|      | `Running`                   | `Running`  |      |
|      | `Receive`                   | `Rx`       |      |
| S    | `Sample`                    | `Smp`      |      |
|      | `Scale`                     | `Scale`    |      |
|      | `Scale Factor`              | `SF`       |      |
|      | `Scaling`                   | `Scaling`  |      |
|      | `Scan`                      | `Scan`     |      |
|      | `Schedule`                  | `Sched`    |      |
|      | `Scheduler`                 | `Sched`    |      |
|      | `Screen`                    | `Scr`      |      |
|      | `Second(s)`                 | `Sec`      |      |
|      | `Segment(s)`                | `Seg`      |      |
|      | `Select`                    | `Sel`      |      |
|      | `Semaphore`                 | `Sem`      |      |
|      | `Sequence`                  | `Seq`      |      |
|      | `Server`                    | `Svr`      |      |
|      | `Set`                       | `Set`      |      |
|      | `Setting`                   | `Setting`  |      |
|      | `Signal`                    | `Sig`      |      |
|      | `Size`                      | `Size`     |      |
|      | `Seven-segments`            | `SS`       |      |
|      | `Sourse`                    | `Src`      |      |
|      | `Start`                     | `Start`    |      |
|      | `Statistic(s)`              | `Stat`     |      |
|      | `Status`                    | `Stat`     |      |
|      | `Stack`                     | `Stk`      |      |
|      | `Standard`                  | `Std`      |      |
|      | `Stop`                      | `Stop`     |      |
|      | `String`                    | `Str`      |      |
|      | `Subtraction`               | `Sub`      |      |
|      | `Suspend`                   | `Suspend`  |      |
|      | `Switch`                    | `Sw`       |      |
|      | `Synchronize`               | `Synch`    |      |
|      | `System`                    | `Syst`     |      |
| T    | `Task`                      | `Task`     |      |
|      | `Table`                     | `Tbl`      |      |
|      | `Threshold`                 | `Th`       |      |
|      | `Tick`                      | `Tick`     |      |
|      | `Time`                      | `Time`     |      |
|      | `Timer`                     | `Tmr`      |      |
|      | `Toggle`                    | `Tgl`      |      |
|      | `Total`                     | `Tot`      |      |
|      | `Trigger`                   | `Trig`     |      |
|      | `Time-stamp`                | `TS`       |      |
|      | `Timeout`                   | `TO`       |      |
| U    | `Unlock`                    | `Unlock`   |      |
|      | `Up`                        | `Up`       |      |
|      | `Update`                    | `Update`   |      |
|      | `Utility`                   | `Util`     |      |
| V    | `Value`                     | `Val`      |      |
|      | `Vector`                    | `Vect`     |      |
|      | `Version`                   | `Ver`      |      |
|      | `Variable`                  | `Var`      |      |
|      | `Visible`                   | `Vis`      |      |
|      | `Voltage`                   | `Vol`      |      |
| W    | `Watchdog`                  | `Wdog`     |      |
|      | `Write`                     | `Wr`       |      |
| Y    | `Year`                      | `Year`     | 年   |
