---
title: Zero-Player Games
date: '2026-04-11T09:12:26.587Z'
sourceUrl: 'https://jesperjuul.net/text/zeroplayergames/'
lang: source
---
**\-Or: What We Talk about When We Talk about Players**

> Staffan Björk & Jesper Juul: "Zero-Player Games  
> Or: What We Talk about When We Talk about Players".  
> Presented at the *Philosophy of Computer Games Conference,* Madrid 2012  
> [https://www.jesperjuul.net/text/zeroplayergames/](https://www.jesperjuul.net/text/avatar/)

## Abstract

Do games need people? If so, what is it that makes people important to games? It can seem self-evident that games are artifacts designed to be used by players, but in this paper we will discuss the paradoxical idea of zero-player games. We do not wish to argue against the study of players, but we believe that many common conceptions of players are too vague to be useful. Based on the examination of zero-player games, we provide five subcomponents to help in the understanding of the player concept. Expressed as questions, these are: Is this a human player? Does the player have agency? Does the player play over time? Does the player appear to have intentionality? Does the player exhibit aesthetic preferences?

## Introduction

What is a game? The most commonly cited game definitions all include players as a central component. Games are described as designed objects (designed by designers or players) that give players the ability to intentionally act towards reaching the goals of a game (e.g. Abt 1970, Costikyan 1994, Klabbers 2003, Salen & Zimmerman 2004, Juul 2005). However, many publications from the last few years have tried to argue that it is impossible to discuss games as designed objects, since games only actually exist when played, or *as* played. For example:

> Game rules can be interpreted and reinterpreted toward preferred meanings and purposes, selectively invoked or ignored, challenged or defended, changed or enforced to suit the collective goals of different groups of players. In short, players can take the same game and collectively make of it strikingly different experiences.  
> (Hughes, 1999, p. 94)
> 
> Yet, the essence of a game is rooted in its interactive nature, and there is no game without a player.  
> (Ermi and Mäyrä 2005)
> 
> Games are created through the act of gameplay, which is contingent on player acts.  
> (Consalvo 2009, p. 408)
> 
> Most importantly, a game becomes a game when it is played; until then it is only a set of rules and game props awaiting human engagement.  
> (Calleja 2011)
> 
> If there is an exceptionalist argument to make about games, an argument that justifies that games as aesthetic form are different than others, \[it\] is that games belong to players - at most, games belong to the designer if she wants to establish a dialogue with the player through the game - but *play*, the performative, expressive act of engaging with a game, contradicts the very meaning of authorship in games.  
> (Sicart 2011)

Let us for now describe these quotes as *player-centric*: they claim that games are products of player actions, perhaps to the exclusion of being understandable as designed objects. While this on the surface can sound sympathetic (who would not choose a living player over a cold design?), a player-centric approach faces the serious problem that players, ironically, do not behave the way they should: players do not believe that they are creating games by themselves. Rather, players demonstrably discuss the merit of different games and rule variations (e.g. Bergström 2010), and will even claim to prefer a specific game for the experiences that they think the game gives them. If players could craft their own experiences regardless of the rules and props of a game, they would not be spending time arguing for the pros and cons of individual games. The danger of the nominally player-centric approach, then, is that it tends to downplay central aspects of player behavior, and potentially distracts us from analyzing *how* and *why* players are invested in the merits of different game designs. The nominally player-centric quotes above apparently paint an incomplete picture of what a player is.

In this paper, we will try to clarify what "player" means, by examining what happens when we remove them from the equation. To get there, we will examine the group of games that are paradoxically referred to as *zero-player games*. Our aim is not to fall into a parallel “game-centric” trap, denying that players matter or that they are worth studying, but simply to ask a fundamental question: what can we learn from studying “games” for which no human involvement is required, and from studying games *as* artifacts devoid of player involvement? And what does this tell us about players?

## Zero-Player Games

Zero-player games can broadly be divided into four categories:

*   **Setup-only games**: Games for which player input is only possible in the initial setup, after which the game proceeds on its own.
*   **Games played by AIs:** Games where computer code assumes the roles of human players.
*   **Solved games:** Games that are solved through analysis, such that every possible game session is captured in a single atemporal description.
*   **Hypothetical games**: Proposed but non-implemented games described to examine a question, or actually existing games that are for practical purposes unplayable.

### *Setup-only games*

> ![Game of Life](https://jesperjuul.net/text/zeroplayergames/index_image002_b.jpg)  
> Figure 1: *Conway's Game of Life*

Figure 1 shows John Conway’s *Game of Life* (Gardner 1970), a cellular automaton in which complex structures appear from seemingly trivial rules. Carlisle (2009) introduced the concept of zero-player game while describing the *Game of Life*, stating that “\[o\]nce the board has been initially set up, there is no player intervention.” The game is noteworthy both for being Turing equivalent (it can calculate anything a computer can) and for the self-assembling patterns that can be constructed within it. *The* *Game of Life* is probably discussed as a game because players can use it to challenge themselves to design certain patterns, but at the same time this contradicts the notion that a game is something that someone plays.  

Programming games is a subgroup of setup-only games where people create AI players that compete against each other in the actual games. First developed in 1970s, *RobotWar* is an example of this type of game and has been copied in very similar games such as *Crobots* and *RoboCode*; they mainly differ in what programming language is used (see Edmunds 1981 for a description of the first commercial release of *RobotWar*). All of these games allow players to write code that describe the behavior of a robot and then let these robots compete against each other in combat. Programming games are however not the first games where people can design rules for player behavior. Axelrod (1984) describes tournaments in the *Iterated Prisoner’s Dilemma* game for which people send in algorithms. AI players not relying on computers have also been developed for *Hex* (Shannon 1953) and *Tic-Tac-Toe* (Michie 1961).

> ![The Incredible Machine](https://jesperjuul.net/text/zeroplayergames/index_image004_b.jpg)  
> Figure 2: *The Incredible Machine*

Another variation of setup-only zero-player games are the commercial games where players can influence the game or level setup, but not influence gameplay after it has begun. The *Incredible Machine* (Figure 2) series of puzzle games is an example of this. The board game *Space Alert* can be seen as a weak example of a zero-player game since it has two main phases of gameplay where the latter allows no input from players. In the video game *Peggle*, the player shoots a ball and must wait for it to run its course through the playing field. These examples demonstrate that many, if not most, games contain zero-player passages.

### *Games played by AI*

When the role of a human player is taken by an algorithm, another case of zero-player games appears. Just as a computer can make two-player games into single-player games by taking the role of one player, so can a single-player game can become a zero-player game when the computer takes the role of the single human player. Common examples of this include games such as *Chess* and *Go* when these are executed by AI players to playing against each other. In fact, the reason why only few computer games qualify as zero-player is not that gameplay or technology prevents it, but rather that users are not given the option of letting the already implemented AI control *all* player positions.

### *Solved games*

Much of the work in artificial intelligence and game theory on AI players has led to the goal of trying to *solve* games. For example, it has been proved for *Checkers* that perfect play from both players lead to a draw (Schaeffer et al. 2007). Likewise, Piet Hein’s game *Hex* has been solved for some game board sizes and in 1952, John Nash proved the general existence of winning strategy for the starting player (Anshelevich 2002). As we can see, solving a game amounts to reducing all possible future sessions of a game to a single atemporal description. In this sense, solving a game is about removing the temporal aspect of game playing, and as a side effect removing the need for players as explorers of the game system, effectively creating a zero-player game.

### *Hypothetical games*

> ![StatBuilder](https://jesperjuul.net/text/zeroplayergames/index_image006_b.jpg)  
> Figure 3: *StatBuilder*

Figure 3 shows the parodic game *StatBuilder*, which nominally follows a standard role-playing game progression of gradually improving character skills, but in practice only asks players to press a central button repeatedly, with no choices available. This does require action from the player, but the player is afforded no choices. Compare this to *4 Minutes and 33 Seconds of Uniqueness*, in which the object of the game is simply to be the only person on the planet playing it for 4 minutes and 33 seconds. Both games deny the player the type of agency that we take for granted in games. Of course, these two games are also designed to be commentaries: the first is a commentary on the repetitive gameplay of massively multiplayer games and role-playing games, while the second questions what it is to play games in the first place. Both are zero-player games intended to be appreciated more as artifacts with potential activities than as actual activities enabled through these artifacts. We are not expected put considerable time into to playing these games, but rather to consider them as hypothetical experiences. Compare this to Richard Garfield's idea of “toy games”[1](#_ftn1), games that are never implemented but simply described to consider a point. Playing actual games is sometimes not as important as imagining or considering the potential gameplay of games.

It is worth noting that other art forms have similar "hypothetical" works such as "unreadable" literature in Gertrude Stein's *The Making of Americans* (1912), "unwatchable" films like Andy Warhol's *Sleep* (1963), and "unlistenable" music like Lou Reed's *Metal Machine Music* (1975). Another game example would be *Desert Bus* (1995). Each example is in practice playable, readable, watchable, or listenable, but they work by denying the user a central conventional source of pleasure (progressing story, rhythm & melody, learning curve), forcing us to find interest either elsewhere or on a meta-level.

## What Zero-Player games tell us

Looking back at the initial quotes, we can now see that the confusion about the relation between players and games actually derives from three different conceptualizations of "games":

*   Games as potential activities consisting of interactions between designs and player actions.
*   Games as entities that only come into being when used by players.
*   Games as atemporal "solved" artifacts.

The difference between these three conceptualizations is at once banal and complex. The difference can be simply explained by distinguishing between potentiality and actuality: a tower of blocks may potentially fall if pushed, and pushing it will cause it to actually fall. A game is something that can be potentially played; sometimes players will actually play them; sometimes players will exhaust them by analysis. While this can be discussed in technical terms, it suffices to say that everyday language already handles this issue quite well. For example, a player of *StarCraft 2* may talk about *StarCraft 2* as a “good game”, admiring the intricate balance between the Terran, Zerg, and Protoss units of the game. When playing the game against an opponent, the very same player may close battles with the customary “gg” greeting, also meaning “good game” but referring to *that* instance of the game. Players apparently have no problem distinguishing between *StarCraft 2* as a designed artifact, and *StarCraft 2* as it plays out in a concrete game instance.

While different games are likely to provide different experiences, playing the same game several times is also likely to provide different experiences. Even so, the different experiences from the same game usually have enough similarities for players to build expectations for what future game instances will bring, and to perceive these as being more similar than game instances deriving from other game designs. This has been described as games expressing different *aesthetic ideals* (Lundgren et al. 2009) regarding gameplay. Game reviews typically function in this way, describing games as atemporal artifacts while also assuming a “model player” who accepts the game goals and knows the conventions of the game. Similarly, people use their impressions of the potential gameplay in a game to discuss it: “\[t\]o suggest a game to someone else is simply the act of matching one’s understanding of the game’s gameplay with one’s perception of another person’s aesthetic ideals.” (Lundgren et al. 2009). In other words: any conception of players needs to acknowledge that players exhibit aesthetic preferences.

## Interaction and Intentionality

The zero-player games discussed here question whether gaming activities require players at all. This openly contradicts the opening player-centric arguments, but the apparent contradiction reveals a layer of nuance: AI players on one hand replace human players but it is also easy to count them as non-players. One approach to untangling this issue is to examine the intuition that there is some way in which a computer cannot be an actual *player*.

While interacting with a game can be seen as a necessary part of being a player, this does not meant that it is sufficient. Many definitions of games (e.g. Abt 1970, Juul 2005, Suits 1990, Costikyan 1994, Avedon & Sutton-Smith 1971, von Neumann & Morgenstern 1990) point out that games must contain both actions and choices. Unless players have some agency to affect the outcome of a game and can intentionally exercise it, they are not really players, or are not playing a game.  

The idea of the *intentional stance* (Dennett 1989) explains why we may have different opinions on who or what qualifies as players. Dennett's argument is that intentionality is not something inherent in subjects but something ascribed to them, be they humans, animals, artifacts, or other phenomena. Dennett distinguishes between three different stances toward we can have toward any given object or phenomenon: *physical* (proceeding according to physical rules), *design* (designed with a purpose), *intentional* (acting with a goal in mind). According to this theory, people try to understand each other and other phenomena by taking an attitude perceived to be most cost effective between how much mental work it requires, compared to how well it predicts future actions or events. The **intentional** stance is the most complex stance in that it assumes the phenomena has goals and actively works towards them. This stance also handles the most complex phenomena we encounter – other people. The **design** stance can handle less complex entities through assumptions on what that entity is created to do, while the **physical** stance can handle those phenomena that only seem to be governed by a graspable set of rules.

Dennett's three different stances provide another benefit for the exploration of player attributes, namely that they identify three stances used in descriptions of games and players. While the game definitions by Juul and Costikyan state that players need to exert effort and make decisions respectively, someone trying to determine if this is the case can only do so if they take intentional stances towards the players. The game definition of Suits demands engagement in activities but unlike Calleja - who requires human engagement - this engagement does not necessarily need to come from a living person. It seems there is general agreement that a player is one towards which we take an intentional stance.

It can seem counter-intuitive when intentional stance theory implies that players do not need to *have* actual intentionality, but only to appear to others as having that. However, it is consistent with other theories used to explain gaming. For example, Linderoth (2010) argues that the ecological approach to perception and learning advocated by Gibson (2000) can explain how players can perform successfully in games. Since this approach in its general form does not rely upon self-consciousness – it is used to explain the behavior of fish as well as of people – one implication of the argument is that intentionality is not necessary to explain the gaming activity. While others can perceive intentionality or consciousness from a player's behavior, the appearance of intentionality is an effect of the behavior rather than a cause of it.

That we perceive AI players in zero-player versions of *Chess* and *Go* as having intention is easily argued since they are the same AI players that need to play against people - if they could not be interpreted as trying to win a game they would be useless as opponents. Likewise, the systems developed to solve *Hex* or *Tic-Tac-Toe* need to be perceived as trying to win games. Creating AI players for these games thereby requires designers to make them appear to have intentionality through their actions, and this design challenge is the core activity for those creating players for the *Iterated Prisoner’s Dilemma* game and the programming games begun with *RobotWar*. Interestingly, the zero-player games without any significant player interaction – *StatBuilder* and *4 Minutes* and *33 Seconds of Uniqueness* – do require perceived intentionality but on a meta level in that the player in these cases are also the initiators of the game instance in the first place. Conway’s *Game of Life* differs from the other examples when the intentional stance is used to understand it: while the patterns that have more complex abilities such as self-replication can be interpreted as having intentionality, it is also difficult to perceive such patterns as non-designed. This zero-player game can therefore give rise to observers taking a meta level design stance – by assuming that someone has created the patterns for specific purposes, regardless of whether the behavior of the system is interpreted as having intentions or not.

## What it means to be a Player

Our exploration of zero-player games was done in part to examine what we mean by *player*. It turned out that temporarily removing players from the equation has allowed us to identify a new level of nuance for describing games and players, so it is now time to return to the original questions of this paper: do games need people, and if so what does a player bring to a game?

The examination above showed that, paradoxically, most zero-player games need *players* that interact with the games and do so with perceived intentionality. However, these players do not need to be humans to be able to fulfill these requirements. While watching zero-player games as a spectator can be rewarding – especially if one has created snippets of code that controls a player or is trying a novel setup – some of these games are more interesting as comments on what games are, or as bringing attention to possible gameplay strategies. The raison d’être of hypothetical games is not to provide play experiences, but to illustrate points about games to observers and these points can in many cases be done without the games being played. For these types of games, players do not need to be actual people or even algorithms but only descriptions of potential ones. While this answers the first question stated initially in the paper, it brings us to the underlying question: what exactly is a player?  

By removing players, we could, perhaps paradoxically, show *what was removed*. Players turn out have a number of separable traits each highlighted by a specific type of zero-player game.

*   **Players having continued agency:** Setup-only games remove players' interaction with the game state for (perhaps) the majority of the time that the game plays.
*   **Players as humans:** AI players negate the need for players to be human.
*   **Players as temporal beings**: When a game is solved, or when a game is purely hypothetical, it does not require actual players (human or not) to play it. The player effectively becomes an atemporal idea.
*   **Players as having intentionality**: In most cases, and even in the case of AI players, we easily identify a player as an entity with an *intention* to perform well in a game. That intention does not need to be rooted in a psychological fact, but can simply be the exhibit of a preference for success over failure. The corollary to this is existence of spoilsports; entities that are supposed to be players but who exhibit no intention of wanting to perform as well as possible in a game.
*   **Player as having aesthetic preferences**: We have several times alluded to the fact that players tend to exhibit preferences for different games. Actual, human, players prefer certain game experiences to other experiences, and will compare games, and categorize games into genres. The initially quoted player-centric conceptions of games are thus revealed to be a specific type of zero-player game, that do not reflect the behavior of real players, only a type of hypothetical player devoid of aesthetic preferences.

One can ask if the five traits above exhaustively describe players. That is, would it be possible for something to have none of the traits above and still be a player? The work of von Neumann and Morgenstern answers this through their use of the concept *fictive players*. Used to transform non-zero sum games to zero-sum games (to make mathematical proofs concerning the latter applicable to the former), these players are not allowed to interact with the system or other players in any way (participation in meta games is explicitly forbidden) and do not have any choice in whether to participate or not in specific game instances. While the passiveness of these players and their use in mathematical proof deny them the first four traits, the inability to choose to participate or not denies them the last trait. However, this inability to not play points towards a trait not exposed by looking at zero-player games so far: that we often assume games to be voluntary activities (as described by Huizinga). Not too surprising, while zero-player games have made visible some unnoticed traits of players, not everything has been revealed.

In conclusion, this paper has highlighted two conceptual confusions within game research. The first confusion concerned the word *game*, which is used both to describe the artifact which supports and encourages a certain activity - gaming - and the activity itself. This confusion has led some researchers to claim that games only exist as activities performed by people. The second confusion concerned the word *player*, and we presented five traits associated with players, each of which was challenged by a specific type of zero-player game. Ironically, this showed that the position we named as *player-centric* is not actually centered on players, since it overlooks their aesthetic preferences. The nominally player-centric position may at first sound as if it takes the perspective of players, but in fact it downplays central aspects of player behavior and experience in order to promote a specific type of theoretical description.  

Game studies need to be clearer about our conceptions of games and players. By considering both players without the need for games and games without the need for players, we have found problems with both ideas and have showed that players and games rely on each other in subtle ways. In the process, we have identified several subcomponents of the player concept. These are the details we must talk about when we wish to talk more precisely and constructively about players – and games.

## Games

*   *4 Minutes and 33 Seconds of Uniqueness*. Petri Purho. Web-based game. 2009.
*   Checkers. Traditional, Board Game.
*   Chess. Traditional, Board Game, current form ca. 1475.
*   *Crobots*. Various computer platforms. 1985.
*   *Desert Bus*. Penn & Teller. Sega CD. 1995 (unpublished).
*   *Dungeons & Dragons*. Gary Gygax and Dave Arneson. Tabletop Role-Playing Games. First edition published 1974.
*   *Everquest*. Sony Online Entertainment. Windows. 1999.
*   *Game of Life*. John Conway. Various computer platforms.
*   Go. Traditional, Board Game, ca. 500 BC.
*   *Hex*. Parker Brothers, Board Game. 1952.
*   *Incredible Machine* series. Jeff Tunnell Productions, PC. 1993 (first game).
*   Iterated Prisoner’s Dilemma. Various computer platforms.
*   *Peggle*. PopCap Games. Windows. 2007.
*   *RoboCode*. Various computer platforms. 2001.
*   *RobotWar*. Muse Software (Apple II version), PLATO and Apple II. 1970s (PLATO), 1981 (Apple II).
*   *Space Alert*. Czech Games Edition, Board Game. 2008.
*   *StarCraft 2*. Blizzard Entertainment. PC. 2010.
*   *StatBuilder*. Backburner Games. Flash. 2008.
*   Tic-Tac-Toe. Traditional, Board Game.

## Music

*   Reed, Lou. (1975). *Metal Machine Music.* RCA.

## Films

*   Warhol, Andy. (1963). *Sleep.*

## References

*   Abt, C.C. (1970). *Serious Games*. New York, NY: The Viking Press.
*   Anshelevich, V. V. (2002). "The Game of Hex: The Hierarchical Approach". In Nowakowski, R.J. (ed.) (2002). *More games of no chance*, vol. 42, pp. 151-165, Cambridge, UK: Cambridge University Press.
*   Avedon, E.M. & Sutton-Smith, B. (1971). *The Study of Games*. New York, NY: John Wiley.
*   Axelrod, Robert (1984), *The Evolution of Cooperation*. New York, NY: Basic Books.
*   Bergström, K. (2010). The Implicit Rules of Board Games – on the particulars of the lusory agreement. *Proceedings of MindTrek 2010*.
*   Calleja, G. (2011). *In-Game: From Immersion to Incorporation*. Cambridge, MA: MIT Press.
*   Carlisle (2009). *Encyclopedia of play in today's society*, Volume 1. Sage Publications, Inc.
*   Consalvo, M. (2009). “There is No Magic Circle”. Games and Culture 4, no. 4.
*   Costikyan, G. (1994). “I Have no Words and I Must Design”. Interactive Fantasy, issue 2.
*   Dennett, D.C. (1989). *The Intentional Stance*. Cambridge, MA: MIT Press.
*   Edmunds, William (1981). “RobotWar: A wargame for all programmers”, *Computer Gaming World*. Vol 1, No, 1, pp. 13–17.
*   Ermi, L. & Mäyrä, F. (2005). “Fundamental components of the gameplay experience: Analysing immersion”. *Proceedings of DiGRA 2005*.
*   Gardner, Martin (1970). “Mathematical Games - The fantastic combinations of John Conway's new solitaire game ‘life’”. *Scientific American* *223*, (October 1970): 120-123.
*   Gibson, E.J. & Pick, A.D. (2000). *An ecological approach to perceptual learning and development*. Oxford: Oxford University Press.
*   Hughes, L. A. (1999). “Children's games and gaming”. In B. Sutton-Smith (Ed.), *Children’s Folklore: A Source Book* (pp. 93–119). New York, NY: Routledge.
*   Juul, J. (2005). *Half-Real: Video Games between Real Rules and Fictional Worlds*. Cambridge, MA: MIT Press.
*   Klabbers, J. H. (2003). “The gaming landscape: A taxonomy for classifying games and simulations”. *DIGRA conference 2003*.
*   Linderoth, J. (2010). “Why gamers donʼt learn more - An ecological approach to games as learning environment”. Nordic DiGRA 2010.
*   Lundgren, S., Bergström, K.J. & Björk, S. (2009). “Exploring Aesthetic Ideals of Gameplay”. In *Breaking New Ground: Innovation in Games, Play, Practice and Theory**. Proceedings of DiGRA 2009*.
*   Michie, D. (1961). "Trial and error". In S.A. Barnett, S.A. & McLaren, A. (eds.) (1961). *Science Survey, part 2*, pp. 129-145, Penguin Books Ltd., 1961. Republished in Michie, D. (1986). *On Machine Intelligence*, 2nd edition, Ellis Horwood.
*   Salen, K., & Zimmerman, E. (2003). *Rules of Play: Game Design Fundamentals*. Cambridge, MA: The MIT Press.
*   Schaeffer, J., Neil Burch, N., Yngvi Björnsson, Y., Akihiro Kishimoto, A., Müller, M., Lake, R., Lu, P. & Sutphen, S. (2007). “Checkers Is Solved”. *Science*, Vol. 317 no. 5844 pp. 1518-1522.
*   Shannon, C.E. (1953), "Computers and Automata". In *Proceedings of the Institute of Radio Engineers*,  Vol. 41, no. 10, pp. 1234-1241. doi: 10.1109/JRPROC.1953.274273. URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4051186&isnumber=4051180
*   Sicart, Miguel (2011). “Against Procedurality.” *Game Studies* 11 (3). http://gamestudies.org/1103/articles/sicart\_ap.
*   Stein, Gertrude. *The Making of Americans* (1912).
*   Suits, B. (1990). *Grasshopper: Games, Life, and Utopia*. Broadview Press.
*   von Neumann, J. & Morgenstern, O. (1990). *Theory of Games and Economic Behavior*. Princeton, NJ: Princeton University Press, 1990.

[](#_ftnref1)1) As described in the lecture available for viewing at [http://gamecenter.nyu.edu/events/lectureseries](http://gamecenter.nyu.edu/events/lectureseries)
