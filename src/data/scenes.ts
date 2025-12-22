import type { Scene } from './types';
import { topGunScenes } from './scenes/topGun';
import { interviewVampireScenes } from './scenes/interviewVampire';
import { oldboyScenes } from './scenes/oldboy';
import { johnWickScenes } from './scenes/johnWick';
import { americanPsychoScenes } from './scenes/americanPsycho';
import { sevenScenes } from './scenes/seven';
import { fightClubScenes } from './scenes/fightClub';
import { aliensScenes } from './scenes/aliens';
import { predatorScenes } from './scenes/predator';
import { jokerScenes } from './scenes/joker';
import { duneScenes } from './scenes/dune';
import { theMatrixScenes } from './scenes/theMatrix';
import { madMaxFuryRoadScenes } from './scenes/madMaxFuryRoad';
import { theDarkKnightScenes } from './scenes/theDarkKnight';
import { pulpFictionScenes } from './scenes/pulpFiction';
import { terminator2Scenes } from './scenes/terminator2';
import { inceptionScenes } from './scenes/inception';
import { killBillVol1Scenes } from './scenes/killBillVol1';
import { noCountryForOldMenScenes } from './scenes/noCountryForOldMen';
import { driveScenes } from './scenes/drive';
import { theFifthElementScenes } from './scenes/theFifthElement';
import { interstellarScenes } from './scenes/interstellar';
import { tronLegacyScenes } from './scenes/tronLegacy';
import { taxiDriverScenes } from './scenes/taxiDriver';

import {
    starshipTroopersScenes, transformersScenes,
    deadpoolScenes, johnWick2Scenes, johnWick3Scenes, dieHardScenes, matrixReloadedScenes,
    matrixRevolutionsScenes, casinoRoyaleScenes, pointBreakScenes, dieHardVengeanceScenes,
    commandoScenes, badBoysScenes, totalRecallScenes, lastCrusadeScenes, firstBloodScenes,
    killBillVol2Scenes
} from './scenes/addedBlockbusters';

import {
    terminatorScenes, robocopScenes, lethalWeaponScenes,
    escapeFromNewYorkScenes, bloodsportScenes, bigTroubleScenes
} from './scenes/eightiesClassics';

import {
    theThingScenes, nightmareOnElmStreetScenes, hellraiserScenes, theFlyScenes, evilDeadIIScenes,
    poltergeistScenes, reAnimatorScenes, videodromeScenes, theLostBoysScenes, americanWerewolfScenes,
    screamScenes, silenceOfTheLambsScenes, candymanScenes, draculaScenes, miseryScenes,
    blairWitchScenes, eventHorizonScenes, jacobsLadderScenes, fromDuskTillDawnScenes, sleepyHollowScenes
} from './scenes/horrorClassics';

import {
    itsAWonderfulLifeScenes, homeAloneScenes, elfScenes,
    christmasVacationScenes, nightmareBeforeChristmasScenes
} from './scenes/christmasClassics';

import {
    miracleScenes, christmasStoryScenes, grinchScenes,
    muppetCarolScenes, loveActuallyScenes
} from './scenes/christmasClassics2';

import {
    whiteChristmasScenes, badSantaScenes, theSantaClauseScenes,
    scroogedScenes, gremlinsScenes, polarExpressScenes,
    jingleAllTheWayScenes, klausScenes, christmasInConnecticutScenes,
    batmanReturnsScenes
} from './scenes/christmasClassics3';

import {
    thinRedLineScenes, stripedPajamasScenes, inglouriousBasterdsScenes,
    furyScenes, kingdomOfHeavenScenes, braveheartScenes
} from './scenes/warClassics1';

import {
    pansLabyrinthScenes, thePatriotScenes, theMissionScenes,
    platoonScenes, dunkirkScenes, greyhoundScenes, tropicThunderScenes
} from './scenes/warClassics2';

import {
    metropolisScenes, cabinetCaligariScenes, nosferatuScenes, mScenes, citizenKaneScenes,
    casablancaScenes, theThirdManScenes, rearWindowScenes, vertigoScenes, northByNorthwestScenes,
    psychoScenes, twelveAngryMenScenes, sevenSamuraiScenes, rashomonScenes, spaceOdysseyScenes,
    drStrangeloveScenes, clockworkOrangeScenes, theGodfatherScenes, chinatownScenes, ragingBullScenes,
    annieHallScenes, starWarsNewHopeScenes, empireStrikesBackScenes, jawsScenes, closeEncountersScenes,
    alienScenes, rockyScenes, theExorcistScenes, etScenes, ghostbustersScenes,
    amadeusScenes, brazilScenes, scarfaceScenes, untouchablesScenes, standByMeScenes, blueVelvetScenes,
    parisTexasScenes, wingsOfDesireScenes, ranScenes, cinemaParadisoScenes
} from './scenes/classics1';

import {
    goodfellasScenes, schindlersListScenes, thePianistScenes, shawshankRedemptionScenes, reservoirDogsScenes,
    fargoScenes, bigLebowskiScenes, trainspottingScenes, princessBrideScenes, akiraScenes, unforgivenScenes,
    lionKingScenes, heatScenes, toyStoryScenes, princessMononokeScenes, trumanShowScenes, americanBeautyScenes,
    crouchingTigerScenes, spiritedAwayScenes, amelieScenes, cityOfGodScenes, lostInTranslationScenes,
    eternalSunshineScenes, shaunOfTheDeadScenes, theIncrediblesScenes, childrenOfMenScenes,
    thereWillBeBloodScenes, wallEScenes, district9Scenes, blackSwanScenes, socialNetworkScenes, herScenes,
    whiplashScenes, laLaLandScenes
} from './scenes/classics2';

import {
    theLastOfUsScenes, cyberpunkScenes, rdr2Scenes, eldenRingScenes,
    controlScenes, deathStrandingScenes, bioshockScenes, bloodborneScenes,
    godOfWarScenes, horizonScenes, ghostTsushimaScenes, alanWakeScenes,
    residentEvilScenes, ff7Scenes, hollowKnightScenes, hadesScenes,
    massEffectScenes, starfieldScenes, baldursGateScenes, spiderManScenes
} from './scenes/games';

import { raidersOfTheLostArkScenes } from './scenes/raidersOfTheLostArk';
import { templeOfDoomScenes } from './scenes/templeOfDoom';
import { crystalSkullScenes } from './scenes/crystalSkull';
import { dialOfDestinyScenes } from './scenes/dialOfDestiny';
import { matrixResurrectionsScenes } from './scenes/matrixResurrections';
import { johnWick4Scenes } from './scenes/johnWick4';

import {
    fastFurious1Scenes, fastFurious2Scenes, fastFurious3Scenes, fastFurious4Scenes, fastFurious5Scenes
} from './scenes/fastFurious1_5';
import {
    fastFurious6Scenes, fastFurious7Scenes, fastFurious8Scenes, fastFurious9Scenes, fastFurious10Scenes
} from './scenes/fastFurious6_10';
import {
    bttf1Scenes, bttf2Scenes, bttf3Scenes
} from './scenes/adventureMovies';
import {
    karateKid1Scenes, rocky1ExpandedScenes, creed1ExpandedScenes
} from './scenes/sportsMovies';
import {
    rocky2Scenes, rocky3Scenes, rocky4Scenes, rocky5Scenes, rockyBalboaScenes,
    creed2Scenes, creed3Scenes, moreSportsScenes
} from './scenes/sportsMovies2';
import {
    pirates1Scenes as pirates1ExpandedScenes, pirates2Scenes as pirates2ExpandedScenes
} from './scenes/cageAndPirates';
import {
    pirates3Scenes as pirates3ExpandedScenes, pirates4Scenes as pirates4ExpandedScenes, pirates5Scenes as pirates5ExpandedScenes
} from './scenes/piratesAndClassics';
import {
    fullMetalJacketExpandedScenes, apocalypseNowExpandedScenes, fewGoodMenExpandedScenes,
    gladiatorExpandedScenes, bladeRunnerExpandedScenes
} from './scenes/expandedClassics';
import {
    br2049ExpandedScenes, theShiningExpandedScenes, vForVendettaExpandedScenes
} from './scenes/modernClassicsExpanded';
import {
    lighthouseExpandedScenes, nosferatu2024ExpandedScenes, dracula2025ExpandedScenes,
    hamletExpandedScenes, ripleyExpandedScenes, chosenExpandedScenes
} from './scenes/horrorAndDramaExpanded';
import {
    grandPrixExpandedScenes, rendezvousExpandedScenes,
    theRockExpandedScenes, conAirExpandedScenes, faceOffExpandedScenes
} from './scenes/cageAndVisualClassics';
import {
    daysOfHeavenExpandedScenes, moulinRougeExpandedScenes, grandBudapestExpandedScenes
} from './scenes/remainingVisualClassics';
import {
    mandyExpandedScenes, pigExpandedScenes, longlegsExpandedScenes,
    raisingArizonaExpandedScenes, leavingLasVegasExpandedScenes,
    mulhollandDriveExpandedScenes, deadPoetsSocietyExpandedScenes,
    passionChristExpandedScenes
} from './scenes/modernCageAndClassics';
import {
    nationalTreasure1Scenes, nationalTreasure2Scenes
} from './scenes/nationalTreasure';
import {
    savingPrivateRyanScenes, ironManScenes, jurassicParkScenes as jurassicParkBlockbusterScenes,
    titanicScenes, avatarScenes, theAvengersScenes
} from './scenes/addedBlockbusters';

export const movieScenes: Record<string, Scene[]> = {
    'top-gun': topGunScenes,
    'interview-vampire': interviewVampireScenes,
    'oldboy': oldboyScenes,
    'john-wick': johnWickScenes,
    'american-psycho': americanPsychoScenes,
    'seven': sevenScenes,
    'fight-club': fightClubScenes,
    'aliens': aliensScenes,
    'predator': predatorScenes,
    'joker': jokerScenes,
    'dune': duneScenes,
    'the-matrix': theMatrixScenes,
    'mad-max-fury-road': madMaxFuryRoadScenes,
    'the-dark-knight': theDarkKnightScenes,
    'pulp-fiction': pulpFictionScenes,
    'terminator-2': terminator2Scenes,
    'inception': inceptionScenes,
    'kill-bill-vol-1': killBillVol1Scenes,
    'no-country-for-old-men': noCountryForOldMenScenes,
    'drive': driveScenes,
    'the-fifth-element': theFifthElementScenes,
    'interstellar': interstellarScenes,
    'tron-legacy': tronLegacyScenes,
    'taxi-driver': taxiDriverScenes,
    'starship-troopers': starshipTroopersScenes,
    'transformers': transformersScenes,
    'deadpool': deadpoolScenes,
    'john-wick-2': johnWick2Scenes,
    'john-wick-3': johnWick3Scenes,
    'die-hard': dieHardScenes,
    'matrix-reloaded': matrixReloadedScenes,
    'matrix-revolutions': matrixRevolutionsScenes,
    'casino-royale': casinoRoyaleScenes,
    'point-break': pointBreakScenes,
    'die-hard-vengeance': dieHardVengeanceScenes,
    'commando': commandoScenes,
    'bad-boys': badBoysScenes,
    'total-recall': totalRecallScenes,
    'last-crusade': lastCrusadeScenes,
    'first-blood': firstBloodScenes,
    'kill-bill-vol-2': killBillVol2Scenes,
    'the-terminator': terminatorScenes,
    'robocop': robocopScenes,
    'lethal-weapon': lethalWeaponScenes,
    'escape-from-new-york': escapeFromNewYorkScenes,
    'bloodsport': bloodsportScenes,
    'big-trouble': bigTroubleScenes,
    'the-thing': theThingScenes,
    'nightmare-elm-street': nightmareOnElmStreetScenes,
    'hellraiser': hellraiserScenes,
    'the-fly': theFlyScenes,
    'evil-dead-2': evilDeadIIScenes,
    'poltergeist': poltergeistScenes,
    're-animator': reAnimatorScenes,
    'videodrome': videodromeScenes,
    'the-lost-boys': theLostBoysScenes,
    'american-werewolf': americanWerewolfScenes,
    'scream': screamScenes,
    'silence-of-lambs': silenceOfTheLambsScenes,
    'candyman': candymanScenes,
    'dracula': draculaScenes,
    'misery': miseryScenes,
    'blair-witch': blairWitchScenes,
    'event-horizon': eventHorizonScenes,
    'jacobs-ladder': jacobsLadderScenes,
    'from-dusk-till-dawn': fromDuskTillDawnScenes,
    'sleepy-hollow': sleepyHollowScenes,
    'its-a-wonderful-life': itsAWonderfulLifeScenes,
    'home-alone': homeAloneScenes,
    'elf': elfScenes,
    'christmas-vacation': christmasVacationScenes,
    'nightmare-before-christmas': nightmareBeforeChristmasScenes,
    'miracle-34th-street': miracleScenes,
    'christmas-story': christmasStoryScenes,
    'how-the-grinch-stole': grinchScenes,
    'muppet-christmas-carol': muppetCarolScenes,
    'love-actually': loveActuallyScenes,
    'white-christmas': whiteChristmasScenes,
    'bad-santa': badSantaScenes,
    'the-santa-clause': theSantaClauseScenes,
    'scrooged': scroogedScenes,
    'gremlins': gremlinsScenes,
    'polar-express': polarExpressScenes,
    'jingle-all-the-way': jingleAllTheWayScenes,
    'klaus': klausScenes,
    'christmas-in-connecticut': christmasInConnecticutScenes,
    'batman-returns': batmanReturnsScenes,
    'the-thin-red-line': thinRedLineScenes,
    'striped-pajamas': stripedPajamasScenes,
    'inglourious-basterds': inglouriousBasterdsScenes,
    'fury': furyScenes,
    'kingdom-of-heaven': kingdomOfHeavenScenes,
    'braveheart': braveheartScenes,
    'apocalypse-now': apocalypseNowExpandedScenes,
    'pans-labyrinth': pansLabyrinthScenes,
    'the-patriot': thePatriotScenes,
    'the-mission': theMissionScenes,
    'platoon': platoonScenes,
    'dunkirk': dunkirkScenes,
    'greyhound': greyhoundScenes,
    'tropic-thunder': tropicThunderScenes,
    'metropolis': metropolisScenes,
    'cabinet-caligari': cabinetCaligariScenes,
    'nosferatu': nosferatuScenes,
    'm': mScenes,
    'citizen-kane': citizenKaneScenes,
    'casablanca': casablancaScenes,
    'the-third-man': theThirdManScenes,
    'rear-window': rearWindowScenes,
    'vertigo': vertigoScenes,
    'north-by-northwest': northByNorthwestScenes,
    'psycho': psychoScenes,
    '12-angry-men': twelveAngryMenScenes,
    'seven-samurai': sevenSamuraiScenes,
    'rashomon': rashomonScenes,
    '2001-space-odyssey': spaceOdysseyScenes,
    'dr-strangelove': drStrangeloveScenes,
    'clockwork-orange': clockworkOrangeScenes,
    'the-godfather': theGodfatherScenes,
    'chinatown': chinatownScenes,
    'raging-bull': ragingBullScenes,
    'annie-hall': annieHallScenes,
    'star-wars-new-hope': starWarsNewHopeScenes,
    'empire-strikes-back': empireStrikesBackScenes,
    'jaws': jawsScenes,
    'close-encounters': closeEncountersScenes,
    'alien': alienScenes,
    'rocky': rockyScenes,
    'the-exorcist': theExorcistScenes,
    'blade-runner': bladeRunnerExpandedScenes,
    'et-extra-terrestrial': etScenes,
    'ghostbusters': ghostbustersScenes,
    'amadeus': amadeusScenes,
    'brazil': brazilScenes,
    'scarface': scarfaceScenes,
    'untouchables': untouchablesScenes,
    'stand-by-me': standByMeScenes,
    'blue-velvet': blueVelvetScenes,
    'paris-texas': parisTexasScenes,
    'full-metal-jacket': fullMetalJacketExpandedScenes,
    'wings-of-desire': wingsOfDesireScenes,
    'ran': ranScenes,
    'cinema-paradiso': cinemaParadisoScenes,
    'goodfellas': goodfellasScenes,
    'schindlers-list': schindlersListScenes,
    'the-pianist': thePianistScenes,
    'shawshank-redemption': shawshankRedemptionScenes,
    'reservoir-dogs': reservoirDogsScenes,
    'fargo': fargoScenes,
    'big-lebowski': bigLebowskiScenes,
    'trainspotting': trainspottingScenes,
    'princess-bride': princessBrideScenes,
    'akira': akiraScenes,
    'unforgiven': unforgivenScenes,
    'lion-king': lionKingScenes,
    'heat': heatScenes,
    'toy-story': toyStoryScenes,
    'princess-mononoke': princessMononokeScenes,
    'truman-show': trumanShowScenes,
    'american-beauty': americanBeautyScenes,
    'crouching-tiger': crouchingTigerScenes,
    'spirited-away': spiritedAwayScenes,
    'amelie': amelieScenes,
    'city-of-god': cityOfGodScenes,
    'lost-in-translation': lostInTranslationScenes,
    'eternal-sunshine': eternalSunshineScenes,
    'shaun-of-the-dead': shaunOfTheDeadScenes,
    'the-incredibles': theIncrediblesScenes,
    'v-for-vendetta': vForVendettaExpandedScenes,
    'children-of-men': childrenOfMenScenes,
    'there-will-be-blood': thereWillBeBloodScenes,
    'wall-e': wallEScenes,
    'district-9': district9Scenes,
    'black-swan': blackSwanScenes,
    'social-network': socialNetworkScenes,
    'her': herScenes,
    'whiplash': whiplashScenes,
    'la-la-land': laLaLandScenes,
    'the-last-of-us-part-1': theLastOfUsScenes,
    'cyberpunk-2077': cyberpunkScenes,
    'red-dead-redemption-2': rdr2Scenes,
    'elden-ring': eldenRingScenes,
    'control': controlScenes,
    'death-stranding': deathStrandingScenes,
    'bioshock': bioshockScenes,
    'bloodborne': bloodborneScenes,
    'god-of-war-ragnarok': godOfWarScenes,
    'horizon-forbidden-west': horizonScenes,
    'ghost-of-tsushima': ghostTsushimaScenes,
    'alan-wake-2': alanWakeScenes,
    'resident-evil-4-remake': residentEvilScenes,
    'final-fantasy-vii-rebirth': ff7Scenes,
    'hollow-knight': hollowKnightScenes,
    'hades': hadesScenes,
    'mass-effect-legendary-edition': massEffectScenes,
    'starfield': starfieldScenes,
    'baldurs-gate-3': baldursGateScenes,
    'marvels-spider-man-2': spiderManScenes,
    'raiders-lost-ark': raidersOfTheLostArkScenes,
    'temple-of-doom': templeOfDoomScenes,
    'crystal-skull': crystalSkullScenes,
    'dial-of-destiny': dialOfDestinyScenes,
    'matrix-resurrections': matrixResurrectionsScenes,
    'john-wick-4': johnWick4Scenes,
    'fast-furious-1': fastFurious1Scenes,
    'fast-furious-2': fastFurious2Scenes,
    'fast-furious-3': fastFurious3Scenes,
    'fast-furious-4': fastFurious4Scenes,
    'fast-furious-5': fastFurious5Scenes,
    'fast-furious-6': fastFurious6Scenes,
    'fast-furious-7': fastFurious7Scenes,
    'fast-furious-8': fastFurious8Scenes,
    'fast-furious-9': fastFurious9Scenes,
    'fast-furious-10': fastFurious10Scenes,
    'saving-private-ryan': savingPrivateRyanScenes,
    'iron-man': ironManScenes,
    'titanic': titanicScenes,
    'avatar': avatarScenes,
    'the-avengers': theAvengersScenes,
    'jurassic-park': jurassicParkBlockbusterScenes,
    'bttf-1': bttf1Scenes,
    'bttf-2': bttf2Scenes,
    'bttf-3': bttf3Scenes,
    'rocky-1': rocky1ExpandedScenes,
    'rocky-2': rocky2Scenes,
    'rocky-3': rocky3Scenes,
    'rocky-4': rocky4Scenes,
    'rocky-5': rocky5Scenes,
    'rocky-balboa': rockyBalboaScenes,
    'creed-1': creed1ExpandedScenes,
    'creed-2': creed2Scenes,
    'creed-3': creed3Scenes,
    'national-treasure-1': nationalTreasure1Scenes,
    'national-treasure-2': nationalTreasure2Scenes,
    'pirates-1': pirates1ExpandedScenes,
    'pirates-2': pirates2ExpandedScenes,
    'pirates-3': pirates3ExpandedScenes,
    'pirates-4': pirates4ExpandedScenes,
    'pirates-5': pirates5ExpandedScenes,
    'the-rock': theRockExpandedScenes,
    'con-air': conAirExpandedScenes,
    'face-off': faceOffExpandedScenes,
    'gladiator': gladiatorExpandedScenes,
    'blade-runner-2049': br2049ExpandedScenes,
    'the-shining': theShiningExpandedScenes,
    'lighthouse': lighthouseExpandedScenes,
    'nosferatu-2024': nosferatu2024ExpandedScenes,
    'dracula-2025': dracula2025ExpandedScenes,
    'hamlet': hamletExpandedScenes,
    'ripley': ripleyExpandedScenes,
    'the-chosen': chosenExpandedScenes,
    'grand-prix': grandPrixExpandedScenes,
    'rendezvous': rendezvousExpandedScenes,
    'days-heaven': daysOfHeavenExpandedScenes,
    'moulin-rouge': moulinRougeExpandedScenes,
    'grand-budapest-hotel': grandBudapestExpandedScenes,
    'mandy': mandyExpandedScenes,
    'pig': pigExpandedScenes,
    'longlegs': longlegsExpandedScenes,
    'raising-arizona': raisingArizonaExpandedScenes,
    'leaving-las-vegas': leavingLasVegasExpandedScenes,
    'mulholland-drive': mulhollandDriveExpandedScenes,
    'dead-poets-society': deadPoetsSocietyExpandedScenes,
    'passion-christ': passionChristExpandedScenes,
    'few-good-men': fewGoodMenExpandedScenes,
    'karate-kid-1': karateKid1Scenes,
    'league-of-their-own': moreSportsScenes,
    'slap-shot': moreSportsScenes,
    'the-sandlot': moreSportsScenes,
    'major-league': moreSportsScenes,
    'the-natural': moreSportsScenes,
    'rudy': moreSportsScenes,
    'field-of-dreams': moreSportsScenes,
    'mighty-ducks': moreSportsScenes,
    'longest-yard': moreSportsScenes,
    'invincible': moreSportsScenes,
};
