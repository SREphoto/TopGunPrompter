import type { Scene } from './types';
import { topGunScenes } from './scenes/topGun';
import { interviewVampireScenes } from './scenes/interviewVampire';
import { oldboyScenes } from './scenes/oldboy';
import { johnWickScenes } from './scenes/johnWick';
import { americanPsychoScenes } from './scenes/americanPsycho';
import { gladiatorScenes } from './scenes/gladiator';
import { sevenScenes } from './scenes/seven';
import { fightClubScenes } from './scenes/fightClub';
import { aliensScenes } from './scenes/aliens';
import { predatorScenes } from './scenes/predator';
import { jokerScenes } from './scenes/joker';
import { duneScenes } from './scenes/dune';
import { theMatrixScenes } from './scenes/theMatrix';
import { bladeRunner2049Scenes } from './scenes/bladeRunner2049';
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
import { theShiningScenes } from './scenes/theShining';
import { tronLegacyScenes } from './scenes/tronLegacy';
import { taxiDriverScenes } from './scenes/taxiDriver';
import {
    savingPrivateRyanScenes, ironManScenes, starshipTroopersScenes, transformersScenes,
    deadpoolScenes, johnWick2Scenes, johnWick3Scenes, dieHardScenes, matrixReloadedScenes,
    matrixRevolutionsScenes, casinoRoyaleScenes, pointBreakScenes, dieHardVengeanceScenes,
    commandoScenes, badBoysScenes, totalRecallScenes, lastCrusadeScenes, firstBloodScenes,
    killBillVol2Scenes, jurassicParkScenes, titanicScenes, avatarScenes, theAvengersScenes
} from './scenes/addedBlockbusters';

export const movieScenes: Record<string, Scene[]> = {
    'top-gun': topGunScenes,
    'interview-vampire': interviewVampireScenes,
    'oldboy': oldboyScenes,
    'john-wick': johnWickScenes,
    'american-psycho': americanPsychoScenes,
    'gladiator': gladiatorScenes,
    'seven': sevenScenes,
    'fight-club': fightClubScenes,
    'aliens': aliensScenes,
    'predator': predatorScenes,
    'joker': jokerScenes,
    'dune': duneScenes,
    'the-matrix': theMatrixScenes,
    'blade-runner-2049': bladeRunner2049Scenes,
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
    'the-shining': theShiningScenes,
    'tron-legacy': tronLegacyScenes,
    'taxi-driver': taxiDriverScenes,
    'saving-private-ryan': savingPrivateRyanScenes,
    'iron-man': ironManScenes,
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
    'jurassic-park': jurassicParkScenes,
    'titanic': titanicScenes,
    'avatar': avatarScenes,
    'the-avengers': theAvengersScenes,
};
