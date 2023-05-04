import { Stage, game, ColorLayer, BitmapText, level, audio } from 'melonjs';

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        level.load("area01");
        //level.load("test_area02");
        audio.playTrack("level_one");
    }

    onDestroyEvent() {
        audio.stopTrack();
    }
};

export default PlayScreen;
