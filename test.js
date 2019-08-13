on("clicked:character-gen", function() {
    getAttrs(['pre_gen_character'], function(values) {
        let character = values.pre_gen_character;
        var settings = {};
        if (character == "rook") {
            // basics
            settings['character_name'] = "Rook";
            settings['hp'] = 42;
            settings['hp_max'] = 42;
            settings['class'] = "atlanta";
            settings['subclass'] = "";
            settings['tier'] = "tier-2";

            // Barrier Values
            settings['toughness'] = 8;
            settings['resistance'] = 4;

            settings['athletics'] = 12;
            settings['endurance'] = 8;
            settings['intimidate'] = 16;
            settings['insight'] = 12;
            settings['knowledge'] = 12;
            settings['mend'] = 8;

            // Defense Values
            settings['dodge'] = 6;
            settings['willpower'] = 8;

            settings['acrobatics'] = 8;
            settings['stealth'] = 12;
            settings['sleight_of_hand'] = 8;
            settings['focus'] = 8;
            settings['fast_talk'] = 8;
            settings['leadership'] = 8;

            // CAP
            settings['critical'] = 2;
            settings['accuracy'] = 14;
            settings['penetration'] = 8;

            // Movement
            settings['min_move'] = 1;
            settings['max_move'] = 5;
            settings['shift'] = 1;

            // Maneuver
            settings['maneuver_name'] = "Tumble";
            settings['statname'] = "";
            settings['maneuver_speed'] = "Slow";
            settings['maneuver_description'] = "Move 1-3 Squares. Can move through any Combatant.";

            // Basic Actions
            settings['melee_name'] = "Spear";
            settings['melee_dice'] = "3d8";
            settings['melee_dice_bonus'] = "0";
            settings['melee_range'] = "2";
            settings['melee_target'] = "1 Foe";
            settings['melee_against'] = "1"; // toughness
            settings['melee_description'] = "";

            settings['ranged_name'] = "Crossbow";
            settings['ranged_dice'] = "3d8";
            settings['ranged_dice_bonus'] = "0";
            settings['ranged_range'] = "5";
            settings['ranged_target'] = "1 Foe";
            settings['ranged_against'] = "1"; // toughness
            settings['ranged_description'] = "";

            // limits
            settings['trigger'] = "1";
            settings['sustain'] = "1";
            settings['amplify'] = "1";

            // Class actions

            // remove any existing actions
            getSectionIDs("repeating_actions", function(idarray) {
                for(var i = 0; i < idarray.length; i++) {
                    removeRepeatingRow("repeating_actions_" + idarray[i]);
                }
            });

            const newId1 = generateRowID();
            settings["repeating_actions_" + newId1 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId1 + "_action_name"] = "Skewer";
            settings["repeating_actions_" + newId1 + "_action_subtype1"] = "General";
            settings["repeating_actions_" + newId1 + "_action_subtype2"] = "Exploit";
            settings["repeating_actions_" + newId1 + "_action_target"] = "1 Foe";
            settings["repeating_actions_" + newId1 + "_action_speed"] = "Slow";
            settings["repeating_actions_" + newId1 + "_action_type"] = "Melee";
            settings["repeating_actions_" + newId1 + "_action_range"] = "2";
            settings["repeating_actions_" + newId1 + "_action_roll_type"] = "0"; // default
            settings["repeating_actions_" + newId1 + "_action_dice"] = "3d8";
            settings["repeating_actions_" + newId1 + "_action_dice_bonus"] = "0";
            settings["repeating_actions_" + newId1 + "_action_against"] = "1";
            settings["repeating_actions_" + newId1 + "_action_healing_dice"] = "";
            settings["repeating_actions_" + newId1 + "_action_description"] = "Amp. Effect: Expend 1 Fast Action to cause Hit Grunt Foe to become FALLEN.";

            const newId2 = generateRowID();
            settings["repeating_actions_" + newId2 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId2 + "_action_name"] = "Lion's Pounce";
            settings["repeating_actions_" + newId2 + "_action_subtype1"] = "General";
            settings["repeating_actions_" + newId2 + "_action_subtype2"] = "Exploit";
            settings["repeating_actions_" + newId2 + "_action_target"] = "";
            settings["repeating_actions_" + newId2 + "_action_speed"] = "Slow + Fast";
            settings["repeating_actions_" + newId2 + "_action_type"] = "";
            settings["repeating_actions_" + newId2 + "_action_range"] = "";
            settings["repeating_actions_" + newId2 + "_action_roll_type"] = "-1"; // none
            settings["repeating_actions_" + newId2 + "_action_dice"] = "";
            settings["repeating_actions_" + newId2 + "_action_dice_bonus"] = "";
            settings["repeating_actions_" + newId2 + "_action_against"] = "1";
            settings["repeating_actions_" + newId2 + "_action_healing_dice"] = "";
            settings["repeating_actions_" + newId2 + "_action_description"] = "Make a Move Action as a Free Action. If a Foe is within Basic Melee Attack Range at the end of your Move Action, make a Basic Melee Attack against that Foe as a Free Action. That Basic Melee Attack has +2 A and +2 P.";

            const newId3 = generateRowID();
            settings["repeating_actions_" + newId3 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId3 + "_action_name"] = "Guided Weapon";
            settings["repeating_actions_" + newId3 + "_action_subtype1"] = "Sustain";
            settings["repeating_actions_" + newId3 + "_action_subtype2"] = "Spell";
            settings["repeating_actions_" + newId3 + "_action_target"] = "1 Hero";
            settings["repeating_actions_" + newId3 + "_action_speed"] = "Slow";
            settings["repeating_actions_" + newId3 + "_action_type"] = "Ranged";
            settings["repeating_actions_" + newId3 + "_action_range"] = "5";
            settings["repeating_actions_" + newId3 + "_action_roll_type"] = "-1"; // none
            settings["repeating_actions_" + newId3 + "_action_dice"] = "";
            settings["repeating_actions_" + newId3 + "_action_dice_bonus"] = "";
            settings["repeating_actions_" + newId3 + "_action_against"] = "1";
            settings["repeating_actions_" + newId3 + "_action_healing_dice"] = "";
            settings["repeating_actions_" + newId3 + "_action_description"] = "+2 A if Target is 1 Other Hero or +4 A if Target is Self. Sust. Effect: Repeat Effect.";

            const newId4 = generateRowID();
            settings["repeating_actions_" + newId4 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId4 + "_action_name"] = "Warsong: Exhilarating Anthem";
            settings["repeating_actions_" + newId4 + "_action_subtype1"] = "General";
            settings["repeating_actions_" + newId4 + "_action_subtype2"] = "Exploit";
            settings["repeating_actions_" + newId4 + "_action_target"] = "All Other Heroes";
            settings["repeating_actions_" + newId4 + "_action_speed"] = "Slow";
            settings["repeating_actions_" + newId4 + "_action_type"] = "Ranged";
            settings["repeating_actions_" + newId4 + "_action_range"] = "5";
            settings["repeating_actions_" + newId4 + "_action_roll_type"] = "-1"; // none
            settings["repeating_actions_" + newId4 + "_action_dice"] = "";
            settings["repeating_actions_" + newId4 + "_action_dice_bonus"] = "0";
            settings["repeating_actions_" + newId4 + "_action_against"] = "1";
            settings["repeating_actions_" + newId4 + "_action_healing_dice"] = "";
            settings["repeating_actions_" + newId4 + "_action_description"] = "Target Other Heroes may alter their next Roll result by +/-2";

            const newId5 = generateRowID();
            settings["repeating_actions_" + newId5 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId5 + "_action_name"] = "Word of Comfort";
            settings["repeating_actions_" + newId5 + "_action_subtype1"] = "General";
            settings["repeating_actions_" + newId5 + "_action_subtype2"] = "Spell";
            settings["repeating_actions_" + newId5 + "_action_target"] = "1 Hero";
            settings["repeating_actions_" + newId5 + "_action_speed"] = "Fast";
            settings["repeating_actions_" + newId5 + "_action_type"] = "Ranged";
            settings["repeating_actions_" + newId5 + "_action_range"] = "5";
            settings["repeating_actions_" + newId5 + "_action_roll_type"] = "3"; // heal
            settings["repeating_actions_" + newId5 + "_action_dice"] = "";
            settings["repeating_actions_" + newId5 + "_action_dice_bonus"] = "0";
            settings["repeating_actions_" + newId5 + "_action_against"] = "1";
            settings["repeating_actions_" + newId5 + "_action_healing_dice"] = "1d10";
            settings["repeating_actions_" + newId5 + "_action_description"] = "Amp. Effect: Expend additional Fast Actions to heal +5x[each additional Fast Action] HP.";

            const newId6 = generateRowID();
            settings["repeating_actions_" + newId6 + "_settingsflag"] = "off";
            settings["repeating_actions_" + newId6 + "_action_name"] = "Warsong: Strengthen the Line";
            settings["repeating_actions_" + newId6 + "_action_subtype1"] = "General";
            settings["repeating_actions_" + newId6 + "_action_subtype2"] = "Spell";
            settings["repeating_actions_" + newId6 + "_action_target"] = "All Other Heroes";
            settings["repeating_actions_" + newId6 + "_action_speed"] = "Slow";
            settings["repeating_actions_" + newId6 + "_action_type"] = "Ranged";
            settings["repeating_actions_" + newId6 + "_action_range"] = "5";
            settings["repeating_actions_" + newId6 + "_action_roll_type"] = "3"; // heal
            settings["repeating_actions_" + newId6 + "_action_dice"] = "";
            settings["repeating_actions_" + newId6 + "_action_dice_bonus"] = "0";
            settings["repeating_actions_" + newId6 + "_action_against"] = "1";
            settings["repeating_actions_" + newId6 + "_action_healing_dice"] = "5";
            settings["repeating_actions_" + newId6 + "_action_description"] = "";

            // Tide turners
            settings['max_tide_turners'] = "2";
            settings['tide_turners_used'] = "0";

            // Tide turner actions

            // remove any existing actions
            getSectionIDs("repeating_tideTurners", function(idarray) {
                for(var i = 0; i < idarray.length; i++) {
                    removeRepeatingRow("repeating_tideTurners" + idarray[i]);
                }
            });

            const newIdt1 = generateRowID();
            settings["repeating_tideTurners_" + newIdt1 + "_settingsflag"] = "off";
            settings["repeating_tideTurners_" + newIdt1 + "_tide_action_name"] = "Blaze of Glory";
            settings["repeating_tideTurners_" + newIdt1 + "_action_subtype1"] = "Sustain";
            settings["repeating_tideTurners_" + newIdt1 + "_action_subtype2"] = "Spell";
            settings["repeating_tideTurners_" + newIdt1 + "_action_target"] = "Self";
            settings["repeating_tideTurners_" + newIdt1 + "_action_speed"] = "Fast";
            settings["repeating_tideTurners_" + newIdt1 + "_action_type"] = "";
            settings["repeating_tideTurners_" + newIdt1 + "_action_range"] = "";
            settings["repeating_tideTurners_" + newIdt1 + "_action_roll_type"] = "-1"; // none
            settings["repeating_tideTurners_" + newIdt1 + "_action_dice"] = "";
            settings["repeating_tideTurners_" + newIdt1 + "_action_dice_bonus"] = "0";
            settings["repeating_tideTurners_" + newIdt1 + "_action_against"] = "1";
            settings["repeating_tideTurners_" + newIdt1 + "_action_healing_dice"] = "";
            settings["repeating_tideTurners_" + newIdt1 + "_action_description"] = "All your Damage-dealing Actions deal Resistance Damage and cause Hit Foe(s) to suffer 1 Stack of BURNING. Sust. Effect: Repeat Effect.";

            const newIdt2 = generateRowID();
            settings["repeating_tideTurners_" + newIdt2 + "_settingsflag"] = "off";
            settings["repeating_tideTurners_" + newIdt2 + "_action_name"] = "Pegasus Charger";
            settings["repeating_tideTurners_" + newIdt2 + "_action_subtype1"] = "Sustain";
            settings["repeating_tideTurners_" + newIdt2 + "_action_subtype2"] = "Spell";
            settings["repeating_tideTurners_" + newIdt2 + "_action_target"] = "Self";
            settings["repeating_tideTurners_" + newIdt2 + "_action_speed"] = "Slow + Slow";
            settings["repeating_tideTurners_" + newIdt2 + "_action_type"] = "";
            settings["repeating_tideTurners_" + newIdt2 + "_action_range"] = "";
            settings["repeating_tideTurners_" + newIdt2 + "_action_roll_type"] = "-1"; // none
            settings["repeating_tideTurners_" + newIdt2 + "_action_dice"] = "";
            settings["repeating_tideTurners_" + newIdt2 + "_action_dice_bonus"] = "";
            settings["repeating_tideTurners_" + newIdt2 + "_action_against"] = "1";
            settings["repeating_tideTurners_" + newIdt2 + "_action_healing_dice"] = "";
            settings["repeating_tideTurners_" + newIdt2 + "_action_description"] = "Your first Move Action and first Basic Melee Attack Action each Round is a Free Action. Sust. Effect: Repeat Effect.";

            // Inventory

            // Keepsakes

            // remove any existing keepsakes
            getSectionIDs("repeating_inventory", function(idarray) {
                for(var i = 0; i < idarray.length; i++) {
                    removeRepeatingRow("repeating_inventory" + idarray[i]);
                }
            });

            const newIdk1 = generateRowID();
            settings["repeating_inventory_" + newIdk1 + "_item_name"] = "Service Medal";
            settings["repeating_inventory_" + newIdk1 + "_item_speed"] = "Fast";
            settings["repeating_inventory_" + newIdk1 + "_item_usage"] = "campaign";
            settings["repeating_inventory_" + newIdk1 + "_item_effect"] = "Your next Action gains AUTO-CRIT";

            const newIdk2 = generateRowID();
            settings["repeating_inventory_" + newIdk2 + "_item_name"] = "Emberwind Spark";
            settings["repeating_inventory_" + newIdk2 + "_item_speed"] = "Free";
            settings["repeating_inventory_" + newIdk2 + "_item_usage"] = "campaign";
            settings["repeating_inventory_" + newIdk2 + "_item_effect"] = "Alter 1 Roll result by up to +/-4. Usable in any Encounter Type.";

            // Anchors

            // remove any existing anchors
            getSectionIDs("repeating_anchors", function(idarray) {
                for(var i = 0; i < idarray.length; i++) {
                    removeRepeatingRow("repeating_anchors" + idarray[i]);
                }
            });

            const newIda1 = generateRowID();
            settings["repeating_anchors_" + newIda1 + "_anchor"] = "Gelspar";
            const newIda2 = generateRowID();
            settings["repeating_anchors_" + newIda2 + "_anchor"] = "Airship - Weapons";
            const newIda3 = generateRowID();
            settings["repeating_anchors_" + newIda3 + "_anchor"] = "Chasers";


            // Deadweights
            getSectionIDs("repeating_deadweight", function(idarray) {
                for(var i = 0; i < idarray.length; i++) {
                    removeRepeatingRow("repeating_deadweight" + idarray[i]);
                }
            });

            // Description

            // History

        } else if (character == "piper") {
            // basics
            settings['character_name'] = "Piper";
            settings['hp'] = 35;
            settings['hp_max'] = 35;
            settings['class'] = "ardent";
            settings['subclass'] = "";
            settings['tier'] = "tier-2";

            // Barrier Values
            settings['toughness'] = 4;
            settings['resistance'] = 8;

            settings['athletics'] = 12;
            settings['endurance'] = 8;
            settings['intimidate'] = 8;
            settings['insight'] = 8;
            settings['knowledge'] = 8;
            settings['mend'] = 12;

            // Defense Values
            settings['dodge'] = 8;
            settings['willpower'] = 6;

            settings['acrobatics'] = 12;
            settings['stealth'] = 8;
            settings['sleight_of_hand'] = 8;
            settings['focus'] = 8;
            settings['fast_talk'] = 8;
            settings['leadership'] = 16;

            // CAP
            settings['critical'] = 3;
            settings['accuracy'] = 13;
            settings['penetration'] = 9;

            // Movement
            settings['min_move'] = 1;
            settings['max_move'] = 5;
            settings['shift'] = 1;

            // Maneuver
            settings['maneuver_name'] = "Tumble";
            settings['statname'] = "";
            settings['maneuver_speed'] = "slow";
            settings['maneuver_description'] = "Move 1-3 Squares. Can move through any Combatant.";

            // Basic Actions
            settings['melee_name'] = "Rapier";
            settings['melee_dice'] = "3d8";
            settings['melee_dice_bonus'] = "0";
            settings['melee_range'] = "1";
            settings['melee_target'] = "1 Foe";
            settings['melee_against'] = "1"; // toughness
            settings['melee_description'] = "";

            settings['ranged_name'] = "Wand";
            settings['ranged_dice'] = "3d6";
            settings['ranged_dice_bonus'] = "0";
            settings['ranged_range'] = "5";
            settings['ranged_target'] = "1 Foe";
            settings['ranged_against'] = "2"; // resistance
            settings['ranged_description'] = "";

            // limits
            settings['trigger'] = "1";
            settings['sustain'] = "1";
            settings['amplify'] = "1";
        }
        setAttrs(settings, {silent: true});
    });
});

// Show/Hide settings area
// Function call to simplifiy coding for showing/hiding settings
function showHide(value) {
    if(value === "on") {
        return "show";  // If the checkbox is CHECKED then show the section
    } else {
        return "hide";  // If the checkbox is UNchecked then hide the section
    }
};
on("change:repeating_actions:settingsflag", function() {
    getAttrs(["repeating_actions_settingsFlag"], function(values) {
        setAttrs({
            "repeating_actions_displaySettingsFlag": showHide(values.repeating_actions_settingsFlag)
        });
    });
});
on("change:repeating_tideTurners:settingsflag", function() {
    getAttrs(["repeating_tideTurners_settingsFlag"], function(values) {
        setAttrs({
            "repeating_tideTurners_displaySettingsFlag": showHide(values.repeating_tideTurners_settingsFlag)
        });
    });
});
on("change:melee_settings_flag", function() {
    getAttrs(["melee_settings_flag"], function(values) {
        setAttrs({
            "melee_display_settings_flag": showHide(values.melee_settings_flag)
        });
    });
});
on("change:ranged_settings_flag", function() {
    getAttrs(["ranged_settings_flag"], function(values) {
        setAttrs({
            "ranged_display_settings_flag": showHide(values.ranged_settings_flag)
        });
    });
});
on("change:maneuver_settings_flag", function() {
    getAttrs(["maneuver_settings_flag"], function(values) {
        setAttrs({
            "maneuver_display_settings_flag": showHide(values.maneuver_settings_flag)
        });
    });
});

on('sheet:opened change:statname change:athletics change:endurance change:intimidate change:insight change:knowledge change:mend change:acrobatics change:stealth change:sleight_of_hand change:focus change:fast_talk change:leadership', () => {
    getAttrs(['statname'], (values) => {
        // convert "Acrobatics" to "acrobatics"
        let actionmodAttrName = `${values.statname.toLowerCase()}`;

        if (actionmodAttrName == "fast talk") {
            actionmodAttrName = "fast_talk";
        } else if (actionmodAttrName == "sleight of hand") {
            actionmodAttrName = "sleight_of_hand";
        }

        getAttrs([actionmodAttrName], (values) => {
            // set the value of @{actionmod} to the value of @{acrobatics}
            setAttrs({actionmod: values[actionmodAttrName]});
        });
    });
});