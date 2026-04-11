---
title: 零玩家游戏
date: '2026-04-11T09:12:26.587Z'
sourceUrl: 'https://jesperjuul.net/text/zeroplayergames/'
lang: zh
---
**——或者：当我们谈论玩家时，我们在谈什么**

> Staffan Björk 与 Jesper Juul："Zero-Player Games  
> Or: What We Talk about When We Talk about Players"。  
> 发表在 2012 年马德里 *Philosophy of Computer Games Conference*。  
> [https://www.jesperjuul.net/text/zeroplayergames/](https://www.jesperjuul.net/text/avatar/)

## 摘要

游戏需要人吗？如果需要，那么人之于游戏的重要性究竟体现在哪里？乍看之下，游戏似乎理所当然就是供玩家使用的人造物；但在这篇文章里，我们要讨论的是一个看似悖论的概念：零玩家游戏。我们并不是要反对对玩家的研究，而是认为，很多关于“玩家”的常见理解都过于模糊，难以真正派上用场。通过考察零玩家游戏，我们提出了五个有助于理解“玩家”概念的子组成部分。把它们写成问题，就是：这是一个人类玩家吗？玩家是否拥有能动性？玩家是否在时间中进行游戏？玩家是否表现出某种意向性？玩家是否展现出审美偏好？

## 引言

什么是游戏？最常被引用的游戏定义，几乎都把玩家视作核心组成部分。游戏被描述为一种经过设计的对象（由设计师或玩家设计），它赋予玩家以有意图的方式行动、朝向游戏目标推进的能力（如 Abt 1970、Costikyan 1994、Klabbers 2003、Salen & Zimmerman 2004、Juul 2005）。然而，过去几年中也有许多研究试图论证：如果把游戏仅仅看成设计对象，就无法真正讨论游戏，因为游戏只有在被游玩时，或者说只有作为“被玩出来的东西”时，才真正存在。比如：

> 游戏规则可以被重新解释并再次解释，以适应偏好的意义与目的；它们可以被选择性调用或忽略，被质疑或捍卫，被改变或执行，以服务于不同玩家群体的共同目标。简而言之，玩家可以把同一个游戏共同塑造成截然不同的体验。  
> （Hughes, 1999, p. 94）
>
> 然而，游戏的本质植根于它的交互性；没有玩家，就没有游戏。  
> （Ermi and Mäyrä 2005）
>
> 游戏是通过游戏行为被创造出来的，而这种行为依赖于玩家的行动。  
> （Consalvo 2009, p. 408）
>
> 最重要的是，游戏是在被玩的时候才成为游戏；在那之前，它不过是一套规则和游戏道具，等待人类投入其中。  
> （Calleja 2011）
>
> 如果说要为游戏提出某种例外主义论证，说明游戏作为一种审美形式为何与其他形式不同，那么理由就在于：游戏属于玩家——至多，若设计师想通过游戏与玩家展开对话，游戏也可以说部分属于设计师——但 *play*，即与游戏接触时那种表演性的、表达性的行为，本身就与游戏中的作者性相冲突。  
> （Sicart 2011）

我们暂且把这些观点称作**以玩家为中心**。它们认为，游戏是玩家行动的产物，甚至可能因此排除了把游戏理解为设计对象的可能性。表面上看，这种说法很讨喜（谁会不愿意站在鲜活的玩家一边，而不是冷冰冰的设计一边呢？），但“以玩家为中心”的路径会遇到一个严重问题：讽刺的是，玩家并不会按这种理论预设的方式行动。玩家并不认为自己是在凭空“创造”游戏。相反，玩家会明确地讨论不同游戏及规则变体的优劣（如 Bergström 2010），甚至会说自己偏爱某个特定游戏，因为他们相信是这个游戏本身带来了某种体验。如果玩家真能不受规则与道具限制、任意塑造自己的体验，他们就不会花那么多时间去争论某个具体游戏的优缺点了。因此，这种名义上“以玩家为中心”的做法，危险之处正在于它往往淡化了玩家行为中的关键面向，甚至可能让我们偏离对玩家为何、又是如何投入不同游戏设计优劣之中的分析。换句话说，上面那些名义上以玩家为中心的论述，其实并没有完整说明“玩家”到底是什么。

在这篇文章中，我们打算通过把玩家从等式里暂时移除，来澄清“玩家”意味着什么。为此，我们将考察一类被悖论性地称为**零玩家游戏**的游戏。我们的目的，不是掉进另一个平行的“以游戏为中心”的陷阱，否认玩家的重要性，或者否认玩家值得研究；我们只是想追问一个更基础的问题：从那些不需要人类参与的“游戏”中，从那些作为不含玩家介入的人造物的游戏中，我们究竟能学到什么？而这些又能告诉我们，玩家是什么？

## 零玩家游戏

零玩家游戏大致可以分成四类：

*   **仅设定型游戏（Setup-only games）**：玩家只可能在初始设定阶段输入，之后游戏便自行运行。
*   **由 AI 游玩的游戏**：由计算机代码承担原本属于人类玩家的角色。
*   **已求解游戏（Solved games）**：通过分析被“解出”的游戏，以至于所有可能的游戏过程都被压缩进一个单一的、非时间性的描述中。
*   **假设性游戏（Hypothetical games）**：为了检验某个问题而被提出但并未实现的游戏，或虽然真实存在、但在实际层面几乎无法游玩的游戏。

### *仅设定型游戏*

> ![生命游戏](https://jesperjuul.net/text/zeroplayergames/index_image002_b.jpg)  
> 图 1：*Conway's Game of Life*

图 1 展示的是 John Conway 的 *Game of Life*（Gardner 1970），这是一种元胞自动机：看似简单的规则，却能涌现出复杂的结构。Carlisle（2009）在描述 *Game of Life* 时引入了“零玩家游戏”这一概念，并指出：“一旦棋盘的初始状态设定完成，玩家就不再介入。” 这个游戏之所以引人注目，一方面在于它具有图灵完备性（它可以计算任何计算机能计算的东西），另一方面在于其中能构造出自组织的图样。*Game of Life* 之所以会被当作游戏来讨论，大概是因为玩家可以借它挑战自己，去设计某些特定图样；但与此同时，这又与“游戏就是某人去玩的一种东西”这一观念相矛盾。

编程游戏是仅设定型游戏的一个子类：人们先创造 AI 玩家，再让这些 AI 在真正的游戏中彼此竞争。最早出现在 1970 年代的 *RobotWar* 就是这一类型的例子，后来又被 *Crobots* 与 *RoboCode* 等非常相似的游戏所继承；它们的主要区别仅在于使用了什么编程语言（关于 *RobotWar* 最早商业发行版的描述，可参见 Edmunds 1981）。这些游戏都允许玩家编写代码，描述机器人该如何行动，然后让机器人彼此进行战斗。不过，编程游戏并不是最早允许人们为玩家行为设计规则的游戏。Axelrod（1984）描述过 *Iterated Prisoner’s Dilemma* 的锦标赛，其中参赛者提交的是算法。即便不依赖计算机，AI 玩家也早已被用于 *Hex*（Shannon 1953）和 *Tic-Tac-Toe*（Michie 1961）。

> ![不可思议机器](https://jesperjuul.net/text/zeroplayergames/index_image004_b.jpg)  
> 图 2：*The Incredible Machine*

仅设定型零玩家游戏的另一种变体，是那类商业游戏：玩家可以影响游戏本身或关卡的设定，但在游戏一旦开始之后，就不能再影响实际游玩过程。*The Incredible Machine*（图 2）系列解谜游戏就是一个例子。桌游 *Space Alert* 也可以被视为一种较弱意义上的零玩家游戏，因为它有两个主要阶段，而后一个阶段不再允许玩家输入。电子游戏 *Peggle* 里，玩家射出一颗球后，也只能等待它在场地中自行运行。这些例子说明，许多游戏——甚至可能是大多数游戏——都包含某种零玩家片段。

### *由 AI 游玩的游戏*

当算法接替人类玩家的位置时，就出现了另一类零玩家游戏。正如计算机在承担其中一名玩家角色时，能把双人游戏变成单人游戏一样；如果计算机进一步承担了单人游戏中那唯一的人类玩家角色，那么单人游戏也可以变成零玩家游戏。常见例子包括 *Chess* 和 *Go*：当它们由 AI 玩家彼此对弈时，就成了零玩家游戏。事实上，只有很少的电脑游戏会被归入零玩家游戏，不是因为游戏机制或技术不允许，而只是因为用户通常没有被提供一个选项：让已实现的 AI 去控制**所有**玩家位置。

### *已求解游戏*

人工智能与博弈论中，大量关于 AI 玩家的工作，都通向了一个目标：**求解**游戏。例如，人们已经证明，在 *Checkers* 中，如果双方都采取完美策略，结果将是和局（Schaeffer et al. 2007）。类似地，Piet Hein 的 *Hex* 已经在某些棋盘尺寸上被求解；而早在 1952 年，John Nash 就证明了先手必胜策略的一般存在性（Anshelevich 2002）。可以看到，求解一个游戏，实际上就是把某个游戏未来所有可能的进行过程，压缩成一个单一的、非时间性的描述。从这个意义上说，求解游戏就是把游戏进行中的时间维度拿掉，同时也顺带移除了玩家作为游戏系统探索者的必要性，于是零玩家游戏便出现了。

### *假设性游戏*

> ![StatBuilder](https://jesperjuul.net/text/zeroplayergames/index_image006_b.jpg)  
> 图 3：*StatBuilder*

图 3 展示了带有戏仿性质的游戏 *StatBuilder*。它表面上遵循了标准角色扮演游戏里角色技能逐渐提升的进程，但在实际操作中，却只要求玩家一遍遍按下中央按钮，几乎没有任何选择。玩家确实需要做出动作，但并没有真正被赋予选择。对照一下 *4 Minutes and 33 Seconds of Uniqueness*：这个游戏的目标，只是让你成为地球上唯一一个持续游玩它 4 分 33 秒的人。这两个游戏都剥夺了我们在游戏中理所当然会期待的那种能动性。当然，这两个游戏本身也是评论：前者是在评论大型多人游戏与角色扮演游戏中的重复性玩法，后者则在追问“玩游戏”到底意味着什么。它们都是零玩家游戏，更适合作为带有潜在活动的人造物去欣赏，而不是作为真正由这些人造物所支持的活动去体验。我们并不会期待自己真的花很多时间去玩这些游戏；更合理的方式，是把它们当作一种假设性的体验来思考。这里可以对照 Richard Garfield 所说的“toy games”[1](#_ftn1)：那种从未被真正实现、只是被描述出来以便说明某个观点的游戏。有时候，真正去玩一个游戏并没有那么重要，想象或思考某个游戏潜在会产生怎样的玩法，反而更重要。

值得注意的是，其他艺术形式中也有类似的“假设性”作品：比如 Gertrude Stein 的 *The Making of Americans*（1912）这种“不可读”的文学，Andy Warhol 的 *Sleep*（1963）这种“不可看”的电影，以及 Lou Reed 的 *Metal Machine Music*（1975）这种“不可听”的音乐。游戏里的另一个例子则是 *Desert Bus*（1995）。这些作品在实践上当然依然可以被游玩、阅读、观看或聆听，但它们的运作方式，是剥夺使用者某种惯常的快乐来源（推进剧情、节奏与旋律、学习曲线），迫使我们要么从别处寻找兴趣，要么在元层面上理解它们。

## 零玩家游戏告诉了我们什么

回看最初那些引文，我们现在可以发现，围绕玩家与游戏关系的混乱，其实来自于对“游戏”的三种不同理解：

*   游戏是由设计与玩家行动相互作用而构成的潜在活动。
*   游戏是只有在被玩家使用时才真正生成的实体。
*   游戏是非时间性的、“已求解”的人造物。

这三种理解的差异，既平凡，又复杂。最简单的说法，是区分潜在性与现实性：一座积木塔在潜在上会在被推倒时坍塌，而当你真的去推它，它就现实地倒下。游戏也是如此：它是一种**可以被玩**的东西；有时玩家真的去玩它；有时玩家则通过分析把它“耗尽”。这当然也可以用技术性术语来讨论，但其实日常语言已经很好地处理了这个问题。比如，一个 *StarCraft 2* 玩家可能会说 *StarCraft 2* 是个“好游戏”，赞赏它在 Terran、Zerg 和 Protoss 兵种之间实现的精妙平衡；而当同一个玩家在与对手对战时，也可能在结束时说一句惯常的“gg”，同样也是“good game”，但这里说的是**这一局**。显然，玩家并不难区分 *StarCraft 2* 作为设计人造物，与 *StarCraft 2* 作为某次具体对局展开出来的实例。

不同游戏大概率会带来不同体验；但同一个游戏被玩上好几次，也同样可能带来不同体验。即便如此，同一款游戏带来的不同体验之间，通常仍有足够多的相似之处，使得玩家能够对未来的局次形成期待，也能感觉这些局次彼此更像，而不是更接近于别的游戏设计所产生的局次。这曾被描述为游戏表达出不同的**审美理想**（Lundgren et al. 2009）。游戏评测通常也是这样运作的：它们一边把游戏描述成非时间性的人造物，一边又默认存在一个“模型玩家”，这个玩家接受游戏目标，也理解该游戏的惯例。类似地，人们也会根据自己对某个游戏潜在玩法的印象来讨论它：“向他人推荐一款游戏，本质上只是把自己对该游戏玩法的理解，与自己对另一个人审美理想的判断进行匹配。”（Lundgren et al. 2009）换句话说：任何关于玩家的理解，都必须承认玩家具有审美偏好。

## 互动与意向性

这里讨论的零玩家游戏，直接质疑了“游戏活动是否一定需要玩家”这一点。这显然与前述那些以玩家为中心的论述相冲突，但这种看似冲突的地方，恰恰揭示出一层更细的差异：AI 玩家一方面替代了人类玩家，但另一方面，我们又很容易不把它们算作真正的玩家。要把这件事理顺，一种办法是去考察这样一种直觉：似乎在某种意义上，计算机并不能成为真正的 *player*。

虽然与游戏互动可以被看作成为玩家的必要条件，但它并不因此就是充分条件。很多游戏定义（如 Abt 1970、Juul 2005、Suits 1990、Costikyan 1994、Avedon & Sutton-Smith 1971、von Neumann & Morgenstern 1990）都指出，游戏必须同时包含行动与选择。除非玩家拥有某种能力，能够影响游戏结果，并且还能有意图地运用这种能力，否则他们就并不真正算是玩家，或者说，他们并没有在“玩一个游戏”。

*意向立场*（intentional stance）的概念（Dennett 1989）解释了，为什么我们会对谁或什么算是玩家有不同意见。Dennett 的观点是，意向性并不是主体内在自带的东西，而是我们赋予给某个对象的东西——不管这个对象是人类、动物、人造物，还是别的现象。Dennett 区分了我们面对任何对象或现象时可以采取的三种立场：**物理立场**（按物理规律运行）、**设计立场**（被设计出来以实现某种目的）、**意向立场**（似乎在朝着某个目标行动）。按照这套理论，人们会在理解他人与其他现象时，选择一种在“需要付出的心智劳动”与“对未来行动或事件的预测效果”之间最划算的理解方式。**意向立场**是最复杂的一种，因为它假定对象拥有目标，并且正主动朝着这些目标努力。这也是我们用来理解最复杂现象——尤其是他人——的方式。**设计立场**则适用于较没那么复杂的对象：我们会根据它被设计出来是为了做什么来理解它。**物理立场**则适用于那些看起来只受一组可把握规则支配的现象。

Dennett 的三种立场之所以对讨论玩家有帮助，还因为它们恰好对应了我们描述游戏与玩家时常用的三种视角。Juul 与 Costikyan 的游戏定义都要求玩家投入努力、作出决定；但想判断某个对象是否真的满足这些条件，你实际上必须对它采取意向立场。Suits 的定义要求参与某种活动；不过 unlike Calleja——后者要求的是人类的参与——这种参与并不一定必须来自活生生的人。看起来，大家大体上都同意：所谓玩家，就是那个值得我们对其采取意向立场的对象。

当意向立场理论暗示：玩家并不一定需要**真的拥有**意向性，而只需要在他人看来**像是拥有**意向性时，这听起来也许会有些反直觉。但它和其他解释游戏活动的理论其实是一致的。例如，Linderoth（2010）认为，Gibson（2000）所倡导的知觉与学习的生态学路径，可以解释玩家如何在游戏里成功行动。由于这种理论在一般形式上并不依赖自我意识——它既被用来解释鱼的行为，也被用来解释人的行为——它带来的一个含义就是：要解释游戏活动，其实未必需要真正的意向性。别人之所以会从玩家的行为中感知到意向性或意识，与其说这是行为的原因，不如说是行为呈现出来的效果。

我们之所以会把 *Chess* 与 *Go* 的零玩家版本中的 AI 理解为“有意图”，是很容易解释的：它们本来就是要拿去和人类对战的 AI；如果我们无法把它们理解为“想要赢”，那它们就根本无法胜任对手的角色。类似地，那些为 *Hex* 或 *Tic-Tac-Toe* 求解而开发出来的系统，也必须被理解为是在试图赢下游戏。因此，为这些游戏创造 AI 玩家，本身就要求设计者通过行动把它们塑造成“看起来像有意图”的东西；而这正是那些为 *Iterated Prisoner’s Dilemma* 或从 *RobotWar* 开始的编程游戏创造玩家的人所从事的核心工作。更有意思的是，那些几乎没有实质玩家互动的零玩家游戏——*StatBuilder* 与 *4 Minutes and 33 Seconds of Uniqueness*——其实也仍然要求某种“被感知到的意向性”，只是这次发生在元层面上：在这里，玩家同时也是游戏实例的发起者。至于 Conway 的 *Game of Life*，它在意向立场上的情况与其他例子不同：那些具有更复杂能力（如自我复制）的图样，的确可能被解释为带有意图；但与此同时，我们也很难不把这些图样视作“被设计出来的”。因此，这个零玩家游戏会促使观察者采取一种元层面的设计立场——假定是某个人为了特定目的创造了这些图样，而不管系统本身的行为是否被解释为带有意图。

## 成为玩家意味着什么

我们之所以考察零玩家游戏，部分原因就在于想弄清楚：我们说“玩家”时，到底在说什么。结果是，暂时把玩家从等式中移除，反而让我们得以识别出一个更细致的层次，用来描述游戏与玩家。因此，现在可以回到本文一开始提出的问题：游戏是否需要人？如果需要，玩家究竟给游戏带来了什么？

上面的考察表明，悖论的是，大多数零玩家游戏依然需要某种 *玩家*：它们需要有对象与游戏互动，而且这种互动还会被他人理解为具有意向性。但这些玩家不一定必须是人类，才能满足这些要求。把零玩家游戏当作旁观者来观看，也可能是有趣的——尤其是当你编写了控制玩家的某段代码，或者在尝试某种新颖设定时更是如此——不过，其中有些游戏更重要的价值，在于它们作为对“游戏是什么”的评论，或者在于它们把某些潜在玩法策略带到我们面前。假设性游戏存在的理由，并不是提供真正的游玩体验，而是向观察者说明某些关于游戏的观点；而这些观点在很多情况下并不需要游戏真的被玩起来。对于这类游戏，玩家不需要是真实的人，甚至不需要是真实算法；只需要是某种潜在玩家的描述即可。虽然这回答了本文最初提出的第一个问题，但它也把我们带向了更深一层的问题：玩家到底是什么？

通过移除玩家，我们也许是以一种悖论的方式展示了：**被移走的究竟是什么**。玩家原来具有若干可以彼此分离的特征，而每一种零玩家游戏都凸显了其中之一。

*   **玩家拥有持续性的能动性**：仅设定型游戏剥除了玩家在（也许是游戏大部分运行时间中）持续与游戏状态互动的能力。
*   **玩家作为人类**：AI 玩家否定了“玩家必须是人类”这一要求。
*   **玩家作为时间性的存在**：当一个游戏被求解，或当一个游戏纯粹是假设性的，它就不再需要真实玩家（无论是否为人类）去玩。玩家于是有效地变成了一个非时间性的观念。
*   **玩家具有意向性**：在大多数情况下——甚至包括 AI 玩家——我们都很容易把玩家识别为一个有意图在游戏中表现良好的实体。这种意图不一定根植于某个心理事实；它也可以仅仅表现为一种偏好：成功胜于失败。与之相对的，就是所谓“扫兴者”（spoilsports）：那些本该是玩家、却没有表现出“想尽可能玩好游戏”意图的实体。
*   **玩家具有审美偏好**：我们前面多次提到，玩家往往会对不同游戏表现出不同偏好。真实的人类玩家会偏爱某些游戏体验胜过另一些，也会比较不同游戏，并把它们归入不同类型。这样一来，最初引用的那些以玩家为中心的游戏观，就反而暴露出：它们其实是一种特殊的零玩家游戏，只反映了一类没有审美偏好的假想玩家，而没有反映真实玩家的行为。

我们还可以继续追问：上面这五个特征是否已经穷尽了“玩家”的全部含义？也就是说，是否可能存在某种对象，它一个都不具备，却仍然算是玩家？von Neumann 与 Morgenstern 对这个问题给出的回答，来自他们提出的**虚构玩家（fictive players）**概念。这个概念被用来把非零和博弈转化为零和博弈，从而让原本只适用于后者的数学证明也能适用于前者。这些“玩家”既不允许以任何方式与系统或其他玩家互动（明确禁止参与元博弈），也没有权利决定自己是否参与某个具体的游戏实例。由于其被动性，以及它们只是数学证明的一部分，它们失去了前四个特征；而它们无法选择参与或不参与，又使它们丧失了第五个特征。不过，正是这种“无法选择不玩”，又指向了一个我们此前通过零玩家游戏还没有暴露出来的特征：我们往往默认游戏是一种**自愿的活动**（正如 Huizinga 所说）。这也不奇怪：零玩家游戏的确让一些此前不显眼的玩家特征变得清晰，但它们并没有揭示一切。

总之，本文指出了游戏研究中的两种概念混淆。第一种混淆围绕“游戏”这个词：它既被用来指支持并鼓励某种活动——即游戏活动本身——的人造物，也被用来指那种活动本身。这种混淆使一些研究者声称：游戏只有作为由人执行的活动时才存在。第二种混淆则围绕“玩家”这个词：我们提出了五种与玩家相关的特征，而每一种都被某类零玩家游戏所挑战。讽刺的是，这也说明我们所谓“以玩家为中心”的立场，实际上并不真的以玩家为中心，因为它忽视了玩家的审美偏好。这个名义上以玩家为中心的立场，听起来好像是在采取玩家视角，但实际上，它为了推进某种特定的理论描述，反而压低了玩家行为与体验中的关键面向。

游戏研究需要更清楚地区分我们关于“游戏”和“玩家”的不同理解。通过同时思考“没有游戏也可能存在的玩家”以及“没有玩家也可能成立的游戏”，我们发现这两种想法都存在问题，也看到了玩家与游戏其实是以微妙方式彼此依赖的。在这一过程中，我们识别出了玩家概念的若干子组成部分。今后，如果我们想更精确、更有建设性地谈论玩家——以及游戏——就必须把这些细部也一起说出来。

## 游戏

*   *4 Minutes and 33 Seconds of Uniqueness*. Petri Purho. Web-based game. 2009.
*   Checkers. 传统棋盘游戏。
*   Chess. 传统棋盘游戏，现行形式约成于 1475 年。
*   *Crobots*. Various computer platforms. 1985.
*   *Desert Bus*. Penn & Teller. Sega CD. 1995（未发行）。
*   *Dungeons & Dragons*. Gary Gygax and Dave Arneson. 桌上角色扮演游戏，首版发行于 1974 年。
*   *Everquest*. Sony Online Entertainment. Windows. 1999.
*   *Game of Life*. John Conway. Various computer platforms.
*   Go. 传统棋盘游戏，约公元前 500 年。
*   *Hex*. Parker Brothers, Board Game. 1952.
*   *Incredible Machine* 系列。Jeff Tunnell Productions，PC。1993（首作）。
*   Iterated Prisoner’s Dilemma. Various computer platforms.
*   *Peggle*. PopCap Games. Windows. 2007.
*   *RoboCode*. Various computer platforms. 2001.
*   *RobotWar*. Muse Software（Apple II 版），PLATO 与 Apple II。1970 年代（PLATO），1981（Apple II）。
*   *Space Alert*. Czech Games Edition, Board Game. 2008.
*   *StarCraft 2*. Blizzard Entertainment. PC. 2010.
*   *StatBuilder*. Backburner Games. Flash. 2008.
*   Tic-Tac-Toe. 传统棋盘游戏。

## 音乐

*   Reed, Lou. (1975). *Metal Machine Music.* RCA.

## 电影

*   Warhol, Andy. (1963). *Sleep.*

## 参考文献

*   Abt, C.C. (1970). *Serious Games*. New York, NY: The Viking Press.
*   Anshelevich, V. V. (2002). "The Game of Hex: The Hierarchical Approach". 载于 Nowakowski, R.J.（编）(2002). *More games of no chance*, vol. 42, pp. 151-165, Cambridge, UK: Cambridge University Press.
*   Avedon, E.M. & Sutton-Smith, B. (1971). *The Study of Games*. New York, NY: John Wiley.
*   Axelrod, Robert (1984). *The Evolution of Cooperation*. New York, NY: Basic Books.
*   Bergström, K. (2010). The Implicit Rules of Board Games – on the particulars of the lusory agreement. *Proceedings of MindTrek 2010*.
*   Calleja, G. (2011). *In-Game: From Immersion to Incorporation*. Cambridge, MA: MIT Press.
*   Carlisle (2009). *Encyclopedia of play in today's society*, Volume 1. Sage Publications, Inc.
*   Consalvo, M. (2009). “There is No Magic Circle”. *Games and Culture* 4, no. 4.
*   Costikyan, G. (1994). “I Have no Words and I Must Design”. *Interactive Fantasy*, issue 2.
*   Dennett, D.C. (1989). *The Intentional Stance*. Cambridge, MA: MIT Press.
*   Edmunds, William (1981). “RobotWar: A wargame for all programmers”, *Computer Gaming World*. Vol 1, No. 1, pp. 13–17.
*   Ermi, L. & Mäyrä, F. (2005). “Fundamental components of the gameplay experience: Analysing immersion”. *Proceedings of DiGRA 2005*.
*   Gardner, Martin (1970). “Mathematical Games - The fantastic combinations of John Conway's new solitaire game ‘life’”. *Scientific American* *223*（1970 年 10 月）: 120-123.
*   Gibson, E.J. & Pick, A.D. (2000). *An ecological approach to perceptual learning and development*. Oxford: Oxford University Press.
*   Hughes, L. A. (1999). “Children's games and gaming”. 载于 B. Sutton-Smith（编）, *Children’s Folklore: A Source Book*（pp. 93–119）. New York, NY: Routledge.
*   Juul, J. (2005). *Half-Real: Video Games between Real Rules and Fictional Worlds*. Cambridge, MA: MIT Press.
*   Klabbers, J. H. (2003). “The gaming landscape: A taxonomy for classifying games and simulations”. *DIGRA conference 2003*.
*   Linderoth, J. (2010). “Why gamers donʼt learn more - An ecological approach to games as learning environment”. *Nordic DiGRA 2010*.
*   Lundgren, S., Bergström, K.J. & Björk, S. (2009). “Exploring Aesthetic Ideals of Gameplay”. In *Breaking New Ground: Innovation in Games, Play, Practice and Theory*. *Proceedings of DiGRA 2009*.
*   Michie, D. (1961). "Trial and error". 载于 S.A. Barnett 与 A. McLaren（编）(1961). *Science Survey, part 2*, pp. 129-145, Penguin Books Ltd. 1961。后收入 Michie, D. (1986). *On Machine Intelligence*, 2nd edition, Ellis Horwood.
*   Salen, K., & Zimmerman, E. (2003). *Rules of Play: Game Design Fundamentals*. Cambridge, MA: The MIT Press.
*   Schaeffer, J., Neil Burch, N., Yngvi Björnsson, Y., Akihiro Kishimoto, A., Müller, M., Lake, R., Lu, P. & Sutphen, S. (2007). “Checkers Is Solved”. *Science*, Vol. 317 no. 5844, pp. 1518-1522.
*   Shannon, C.E. (1953). "Computers and Automata". In *Proceedings of the Institute of Radio Engineers*, Vol. 41, no. 10, pp. 1234-1241. doi: 10.1109/JRPROC.1953.274273. URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4051186&isnumber=4051180
*   Sicart, Miguel (2011). “Against Procedurality.” *Game Studies* 11 (3). http://gamestudies.org/1103/articles/sicart_ap.
*   Stein, Gertrude. *The Making of Americans* (1912).
*   Suits, B. (1990). *Grasshopper: Games, Life, and Utopia*. Broadview Press.
*   von Neumann, J. & Morgenstern, O. (1990). *Theory of Games and Economic Behavior*. Princeton, NJ: Princeton University Press.

[](#_ftnref1)1）见讲座录像：[http://gamecenter.nyu.edu/events/lectureseries](http://gamecenter.nyu.edu/events/lectureseries)
