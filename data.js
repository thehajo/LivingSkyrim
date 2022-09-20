(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
		{
          name: 'Alchemy Mastery',
          desc: ['Potions and poisons you make are 1% stronger per level of Alchemy.'],
          req: [0],
          pos: [0, 0],
		}, {
          name: 'Malefactor',
          desc: ['Poisons you mix are 25% stronger.'],
          req: [20],
          pos: [-65, -11],
          deps: [0],
		}, {
          name: 'Snakeblood',
          desc: ['Your resistance to poisons and toxicity increases with the number of ingredients you consume.'],
          req: [30],
          pos: [-34, -69],
          deps: [1],
		}, {
          name: 'Concentrated Poison',
          desc: ['All poisons you create now weigh less, and poisons applied to weapons last for twice as many hits.'],
          req: [60],
          pos: [-20, -99],
          deps: [2],
		}, {
          name: 'Gourmet',
          desc: ['Vendors of rare alchemical ingredients may sell Jarrin Root, used to make deadly poisons.'],
          req: [70],
          pos: [-39, -123],
          deps: [3],
		}, {
          name: 'Alkahest',
          desc: ['Ignore 50% armor when attacking a poisoned target.'],
          req: [80],
          pos: [-23, -161],
          deps: [3],
		}, {
          name: 'Catalyst',
          desc: ['Create explosive concoctions and specially formulated toxins.'],
          req: [90],
          pos: [-52, -200],
          deps: [5],
		}, {
          name: 'Stimulants',
          desc: ['Regenerate an extra 2% of your total Magicka and Stamina per second under the effects of a beneficial potion or food.'],
          req: [50],
          pos: [-30, -21],
          deps: [0],
		}, {
          name: 'Slow Metabolism',
          desc: ['All potions and food with beneficial effects last twice as long.'],
          req: [60],
          pos: [-16, -40],
          deps: [7],
		}, {
          name: 'Adrenaline',
          desc: ['Move 10% faster under the effects of a beneficial potion or food.'],
          req: [80],
          pos: [0, -28],
          deps: [8],
		}, {
          name: 'Naturalist',
          desc: ['Increased chance of harvesting additional ingredients from flora.'],
          req: [40],
          pos: [32, -33],
          deps: [0],
		}, {
          name: 'Field Alchemist',
          desc: ['Create 50% more effective potions in the field using just a mortar and pestle.'],
          req: [60],
          pos: [1, -60],
          deps: [10],
		}, {
          name: 'Purity',
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [70],
          pos: [1, -100],
          deps: [11],
        }, {
          name: 'Benefactor',
          desc: ['Beneficial potions you make are 25% stronger.'],
          req: [30],
          pos: [60, -12],
          deps: [0],
		}, {
          name: 'Physician',
          desc: ['Create poultices, tonics, and healing salves. Potions you make that restore Health, Magicka or Stamina are 25% stronger.'],
          req: [30],
          pos: [36, -69],
          deps: [13],
		}, {
          name: 'Experimenter',
          desc: ['Consuming more ingredients will allow you to gradually become more proficient at detecting their subtle properties. Beneficial potions you create now weigh less.'],
          req: [60],
          pos: [18, -98],
          deps: [14],
		}, {
          name: 'Anatomist',
          desc: ['Extract and preserve the potent properties available in blood and organs, allowing you to tap the hidden essences of other beings.'],
          req: [80],
          pos: [25, -160],
          deps: [15],
		}, {
          name: 'Chymist',
          desc: ['Refine ingredients, create purified extracts and essences, and distill potions to concentrate their effects.'],
          req: [90],
          pos: [57, -201],
          deps: [16],
		}, {
          name: 'Double Toil and Trouble',
          desc: ['Twice as many potions are created.'],
          req: [100],
          pos: [1, -223],
          deps: [6, 12, 17],
		}, {
          name: 'Plague Doctor',
          desc: ['You gain 25% resistance to disease. Nearby opponents suffer 25% weakness to disease and poison.'],
          req: [70],
          pos: [40, -122],
          deps: [15],		
        }
      ]
    }, {
      name: 'Illusion',
      cname: 'illusion',
      perks: [
        {
          name: 'Illusion Mastery',
          desc: ['Cast Illusion spells for 0.5% less Magicka per level of Illusion.'],
		  req: [0],
          pos: [0, 0],
        }, {
          name: 'Illusion Dual Casting',
          desc: ['Dual casting an Illusion spell overcharges its effects, increasing power and casting cost.'],
          req: [20],
          pos: [-52, -10],
          deps: [0],
		}, {
          name: 'Neverworld',
          desc: ['Calm spells have 50% chance to persist for 15 seconds when broken.'],
          req: [30],
          pos: [0, -48],
          deps: [0],
		}, {
          name: 'Lamb to the Slaughter',
          desc: ['Calm spells reduce armor by 100 points and magic resistance by 25%.'],
          req: [60],
          pos: [-69, -89],
          deps: [2],
		}, {
          name: 'Terror',
          desc: ['Fear spells cause opponents to drop their weapon.'],
          req: [40],
          pos: [13, -80],
          deps: [2],
		}, {
          name: 'Paralyzing Fear',
          desc: ['Fear spells have 25% chance to compel their targets to remain motionless.'],
          req: [70],
          pos: [-32, -111],
          deps: [4],
		}, {
          name: 'Iron Maiden',
          desc: ['Fury spells inflict 20 damage whenever the target attacks.'],
          req: [50],
          pos: [3, -122],
          deps: [4],
		}, {
          name: 'Enrage',
          desc: ['Fury spells cause targets to deal 50% more attack damage, except when they are attacking the caster.'],
          req: [80],
          pos: [-37, -174],
          deps: [6],
		}, {
          name: 'Broken Minds',
          desc: ['Command spells last twice as long.'],
          req: [60],
          pos: [13, -155],
          deps: [6],
		}, {
          name: 'Possession',
          desc: ['Command spells cause targets to move and attack 50% faster.'],
          req: [90],
          pos: [-7, -207],
          deps: [8],
		}, {
          name: 'Splendor',
          desc: ['Rally spells improve the target\'s attributes by an additional 50 points.'],
          req: [60],
          pos: [39, -132],
          deps: [6],
		}, {
          name: 'Mind Thrall',
          desc: ['Can activate a person under a mind affecting spell or effect to take control, forcing them to follow you and fight for you until released.'],
          req: [100],
          pos: [56, -207],
          deps: [10],
		}, {
          name: 'Spirit of War',
          desc: ['Rally spells manifest spectral images of allied targets in combat. The illusions have 40% Health and fight for you until the spell wears off.'],
          req: [90],
          pos: [79, -169],
          deps: [10],
		}, {
          name: 'Quiet Casting',
          desc: ['All spells and shouts from any school of magic are silent to others.'],
          req: [50],
          pos: [50, -60],
          deps: [0],
		}, {
          name: 'Blur',
          desc: ['While invisible, you are ethereal and cannot be harmed if you are not attacking or casting a spell.'],
          req: [90],
          pos: [76, -123],
          deps: [13],
		}, {
          name: 'Animage',
		  levels: 3,
          desc: ['Mind affecting spells and effects work on creatures and people up to 10 levels higher, and other targets up to 5 levels higher.','Mind affecting spells and effects work on creatures and people up to 20 levels higher, and other targets up to 10 levels higher.','Mind affecting spells and effects work on creatures and people up to 40 levels higher, and other targets up to 20 levels higher.'],
          req: [20, 50, 80],
          pos: [60, -14],
          deps: [0],
		}, {
          name: 'Master of the Mind',
		  levels: 2,
          desc: ['Mind affecting spells work on undead, daedra and automatons at half duration.','Mind affecting spells work on undead, daedra and automatons at full duration.'],
          req: [70, 100],
          pos: [90, -72],
          deps: [15],
		
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'Conjuration Mastery',
          desc: ['Cast Conjuration spells for 0.5% less Magicka per level of Conjuration.'],
		  req: [0],
          pos: [0, 0],
        }, {
          name: 'Conjuration Dual Casting',
          desc: ['Dual casting a Conjuration spell overcharges its effects, increasing duration and casting cost.'],
          req: [20],
          pos: [-68, -20],
          deps: [0],
		}, {
          name: 'Atromancy',
          desc: ['Summoned daedra and creatures last twice as long.'],
          req: [30],
          pos: [-48, -41],
          deps: [0],
		}, {
          name: 'Oblivion Stone',
		  levels: 2,
          desc: ['Summoned daedra and creatures get 100 points of armor and 25% magic resistance.','Summoned daedra and creatures get 200 points of armor and 50% magic resistance.'],
          req: [50, 80],
          pos: [-63, -88],
          deps: [2],
		}, {
          name: 'Elemental Potency',
          desc: ['Atronach summoning spells now call higher level Potent Atronachs with improved elemental attacks.'],
          req: [70],
          pos: [-63, -147],
          deps: [3],
		}, {
          name: 'Elemental Conflux',
          desc: ['While near an allied atronach, gain a 20% bonus to matching elemental spells and effects, and 50 matching elemental damage to bound weapons.'],
          req: [90],
          pos: [-69, -183],
          deps: [4],
		}, {
          name: 'Necromancy',
          desc: ['Summoned and raised undead last twice as long.'],
          req: [30],
          pos: [32, -36],
          deps: [0],
		}, {
          name: 'Rift Summoner',
		  levels: 2,
          desc: ['Summon range increased by 25 feet.', 'Summon range increased by 50 feet.'],
          req: [40, 70],
          pos: [-1, -64],
          deps: [2, 6],
		}, {
          name: 'Grand Conjurer',
		  levels: 2,
          desc: ['Can reanimate, banish or command targets up to 15 levels higher.','Can reanimate, banish or command targets of any level.'],
          req: [60, 90],
          pos: [-7, -110],
          deps: [7],
		}, {
          name: 'Ghoul Frenzy',
          desc: ['Raised undead are created with 150% extra attack speed and 100% extra movement speed, fading over 60 seconds.'],
          req: [50],
          pos: [42, -90],
          deps: [6],
		}, {
          name: 'Blood Zombie',
          desc: ['Summoned and raised undead absorb 10 points of Health per second from opponents in melee range.'],
          req: [70],
          pos: [41, -140],
          deps: [9],
		}, {
          name: 'Twin Souls',
          desc: ['You can summon or raise an additional minion.'],
          req: [100],
          pos: [-2, -195],
          deps: [4, 10],
		}, {
          name: 'Necromaster',
          desc: ['Undead raised with Dread Zombie or Dead Thrall get bonus Health, Magicka and Stamina based on their level, and you can give them items.'],
          req: [90],
          pos: [55, -180],
          deps: [10],
		}, {
          name: 'Mystic Binding',
          desc: ['Bound Weapon spells now create Mystic Weapons instead, which deal more damage.'],
          req: [20],
          pos: [65, -16],
          deps: [0],
		}, {
          name: 'Soul Stealer',
          desc: ['Bound weapons cast Soul Trap on targets for 5 seconds.'],
          req: [30],
          pos: [68, -48],
          deps: [13],
		}, {
          name: 'Oblivion Binding',
          desc: ['Bound weapons banish conjured daedra, deal 100 bonus damage to other daedra and turn raised undead.'],
          req: [40],
          pos: [82, -77],
          deps: [14],
		}, {
          name: 'Hollow Binding',
          desc: ['Bound weapons cut through flesh and spirit, reducing magic resistance by 25% for 5 seconds.'],
          req: [60],
          pos: [68, -112],
          deps: [15],
		}, {
          name: 'Void Brand',
          desc: ['Bound weapons drain 30 points of Magicka and Stamina per second for 5 seconds. When both are depleted, drains Health instead.'],
          req: [80],
          pos: [97, -173],
          deps: [16],
		
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Destruction Mastery',
          desc: ['Cast Destruction spells for 0.5% less Magicka per level of Destruction.'],
		  req: [0],
          pos: [0, 0],
        }, {
          name: 'Destruction Dual Casting',
          desc: ['Dual casting a Destruction spell overcharges its effects, increasing power and casting cost.'],
          req: [20],
          pos: [-39, -3],
          deps: [0],
		}, {
          name: 'Impact',
          desc: ['Projectile based Destruction spells have 30% chance to stagger their targets when dual cast.'],
          req: [20],
          pos: [-82, -24],
          deps: [1],
		}, {
          name: 'Augmented Flames',
		  levels: 2,
          desc: ['Fire spells and effects are 20% more powerful.', 'Fire spells and effects are 40% more powerful.'],
          req: [30, 60],
          pos: [-58, -40],
          deps: [0],
		}, {
          name: 'Devouring Flames',
          desc: ['Fire spells ignite targets below 20% Health, dealing extra damage for 5 seconds.'],
          req: [50],
          pos: [-91, -110],
          deps: [3],
		}, {
          name: 'Scorched Earth',
          desc: ['Fire spells burn their victims to cinders, leaving a pyre that ignites opponents, dealing extra damage for 10 seconds.'],
          req: [70],
          pos: [-87, -177],
          deps: [4],
		}, {
          name: 'Augmented Frost',
		  levels: 2,
          desc: ['Frost spells do 25% more damage.', 'Frost spells and effects are 40% more powerful.'],
          req: [30, 60],
          pos: [-12, -57],
          deps: [0],
		}, {
          name: 'Chilling Frost',
          desc: ['Frost spells reduce attack speed by 20% and inflict 15% weakness to frost for 10 seconds.'],
          req: [50],
          pos: [-37, -120],
          deps: [6],
		}, {
          name: 'Winter\'s Grasp',
          desc: ['Frost spells freeze targets below 25% Health in a block of ice for 5 seconds.'],
          req: [70],
          pos: [-27, -167],
          deps: [7],
		}, {
          name: 'Augmented Shock',
		  levels: 2,
          desc: ['Shock spells and effects are 20% more powerful.', 'Shock spells and effects are 40% more powerful.'],
          req: [30, 60],
          pos: [32, -52],
          deps: [0],
		}, {
          name: 'Deafening Shock',
          desc: ['Shock spells have 20% chance to silence targets for 2 seconds.'],
          req: [50],
          pos: [25, -119],
          deps: [9],
		}, {
          name: 'Crackling Sphere',
          desc: ['Shock spells have 20% chance to levitate targets for 2 seconds.'],
          req: [70],
          pos: [29, -173],
          deps: [10],
		}, {
          name: 'Hellstorm',
          desc: ['Deal double elemental damage to targets that are ignited, frozen, silenced or levitated.'],
          req: [100],
          pos: [-31, -217],
          deps: [5, 8, 11],
		}, {
          name: 'Rune Master',
		  levels: 2,
          desc: ['Can place runes three times as far away.','Can place runes at any distance.'],
          req: [40, 70],
          pos: [70, -48],
          deps: [0],
		}, {
          name: 'Hethoth\'s Disjunction',
          desc: ['All opponents affected by a Destruction cloak get 25% weakness to that element.'],
          req: [60],
          pos: [89, -94],
          deps: [13],
		}, {
          name: 'Elemental Barrier',
          desc: ['Destruction walls and cloaks deal 25% more damage, and the damage persists for 5 seconds.'],
          req: [80],
          pos: [58, -142],
          deps: [14],
		}, {
          name: 'Elemental Shield',
          desc: ['Destruction cloaks grant 50% resistance to their element.'],
          req: [90],
          pos: [103, -134],
          deps: [14],
		}, {
          name: 'Raw Power',
		  levels: 3,
          desc: ['Non-elemental Destruction spells and effects are 10% more powerful.','Non-elemental Destruction spells and effects are 20% more powerful.','Non-elemental Destruction spells and effects are 30% more powerful.'],
          req: [30, 60, 90],
          pos: [61, -16],
          deps: [0],
		
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'Restoration Mastery',
          desc: ['Cast Restoration spells for 0.5% less Magicka per level of Restoration.'],
		  req: [0],
          pos: [0, 0],
        }, {
          name: 'Mercy',
          desc: ['Restoration spells are up to 50% more effective if the recipient\'s remaining Health is low.'],
          req: [20],
          pos: [-33, -42],
          deps: [0],
		}, {
          name: 'Harm',
          desc: ['Casting healing spells or effects on opponents in combat deals damage instead.'],
          req: [50],
          pos: [-70, -79],
          deps: [1],
		}, {
          name: 'Corrupting Poison',
		  levels: 2,
          desc: ['Poison spells still deal 25% damage if the target is immune to poison.','Poison spells still deal 50% damage if the target is immune to poison.'],
          req: [60, 90],
          pos: [-95, -69],
          deps: [2],
		}, {
          name: 'Slow Death',
          desc: ['Poison spells last twice as long.'],
          req: [90],
          pos: [-105, -29],
          deps: [3],
		}, {
          name: 'Sun\'s Judgment',
		  levels: 2,
          desc: ['Sun spells deal 75% damage to the living, daedra, automatons and dragons.','Sun spells deal full damage to the living, daedra, automatons and dragons.'],
          req: [60, 90],
          pos: [-77, -121],
          deps: [2],
		}, {
          name: 'Rebuke Undead',
          desc: ['Turn Undead spells reduce undead below 35% Health to ashes.'],
          req: [70],
          pos: [-107, -151],
          deps: [5],
		}, {
          name: 'Respite',
          desc: ['Healing spells also restore Stamina.'],
          req: [40],
          pos: [-43, -81],
          deps: [1],
		}, {
          name: 'Eternal Flame',
          desc: ['Healing spells linger, healing the original amount again over the course of 20 seconds.'],
          req: [90],
          pos: [-47, -171],
          deps: [7],
		}, {
          name: 'Vigilant Ward',
		  levels: 2,
          desc: ['Wards cost 50% less Magicka and reduce incoming damage by 30%.','Wards cost 80% less Magicka and reduce incoming damage by 50%.'],
          req: [40, 70],
          pos: [-19, -73],
          deps: [0],
		}, {
          name: 'Ward Absorb',
          desc: ['When your ward blocks a spell, you gain Magicka equal to 30% of that spell\'s cost.'],
          req: [60],
          pos: [2, -121],
          deps: [9],
		}, {
          name: 'Mage Ward',
          desc: ['While dual casting a spell, creates a ward that protects against spells for up to 200 points. Mage Ward gains half benefit from ward perks.'],
          req: [80],
          pos: [-8, -163],
          deps: [10],
		}, {
          name: 'Inspire',
		  levels: 2,
          desc: ['Nearby living allies are healed 5 points per second.','Nearby living allies are healed 10 points per second'],
          req: [30, 60],
          pos: [14, -49],
          deps: [0],
		}, {
          name: 'Necromage',
          desc: ['All spells and effects from any school are 25% stronger or last 50% longer on the undead.'],
          req: [70],
          pos: [31, -136],
          deps: [12],
		}, {
          name: 'Inner Light',
		  levels: 2,
          desc: ['Regenerate an extra 1% of your total Magicka per second.','Regenerate an extra 2% of your total Magicka per second.'],
          req: [30, 60],
          pos: [49, -63],
          deps: [0],
		}, {
          name: 'Blessed',
          desc: ['Shrine blessings you receive are 50% stronger and last twice as long.'],
          req: [80],
          pos: [70, -143],
          deps: [14],
		}, {
          name: 'Intervention',
          desc: ['Once every 20 minutes, a higher power brings you back with full Health upon death.'],
          req: [100],
          pos: [120, -167],
          deps: [15],
		}, {
          name: 'Restoration Dual Casting',
          desc: ['Dual casting a Restoration spell overcharges its effects, increasing power and casting cost.'],
          req: [20],
          pos: [57, -9],
          deps: [0],
		
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Alteration Mastery',
          desc: ['Cast Alteration spells for 0.5% less Magicka per level of Alteration.'],
		  req: [0],
          pos: [0, 0],
        }, {
          name: 'Alteration Dual Casting',
          desc: ['Dual casting an Alteration spell overcharges its effects, increasing duration and casting cost.'],
          req: [20],
          pos: [-39, -19],
          deps: [0],
		}, {
          name: 'Mage Armor',
		  levels: 3,
          desc: ['Protection spells like Stoneflesh are 100% stronger if not wearing armor.','Protection spells like Stoneflesh are 150% stronger if not wearing armor.','Protection spells like Stoneflesh are 200% stronger if not wearing armor.'],
          req: [20, 50, 80],
          pos: [-22, -61],
          deps: [0],
		}, {
          name: 'Ocato\'s Preparation',
          desc: ['When entering combat, automatically activates the most effective magical armor spell you know.'],
          req: [50],
          pos: [-98, -80],
          deps: [2],
		}, {
          name: 'Stability',
          desc: ['Alteration spells and effects last 25% longer.'],
          req: [40],
          pos: [-68, -105],
          deps: [2],
		}, {
          name: 'Initiate',
          desc: ['Novice spells of any school cost no Magicka to cast.'],
          req: [60],
          pos: [-117, -139],
          deps: [4],
		}, {
          name: 'Ritualist',
          desc: ['Two-handed spells can be cast while moving, at 25% reduced strength.'],
          req: [100],
          pos: [-95, -185],
          deps: [4],
		}, {
          name: 'Greater Malison',
          desc: ['Vulnerability spells inflict an additional 10% weakness, and corrosion spells reduce armor by an additional 50 points.'],
          req: [70],
          pos: [-60, -142],
          deps: [4],
		}, {
          name: 'Sorcerer\'s Robes',
          desc: ['Spells from any school are 25% more effective if not wearing armor.'],
          req: [40],
          pos: [-29, -129],
          deps: [2],
		}, {
          name: 'Force of Will',
          desc: ['Take 20% less attack damage while dual casting a spell if not wearing armor.'],
          req: [80],
          pos: [-39, -165],
          deps: [8],
		}, {
          name: 'Telekinetic Force',
		  levels: 2,
          desc: ['Objects thrown with Telekinesis deal an extra 250 points of damage.', 'Objects thrown with Telekinesis deal an extra 500 points of damage.'],
          req: [50, 80],
          pos: [2, -115],
          deps: [0],
		}, {
          name: 'Telekinetic Prodigy',
          desc: ['Dual cast Telekinesis to grab opponents.'],
          req: [90],
          pos: [21, -178],
          deps: [10],
		}, {
          name: 'Magic Resistance',
		  levels: 3,
          desc: ['Increases Magic Resistance by 10%.','Increases Magic Resistance by 20%.','Increases Magic Resistance by 30%.'],
          req: [20, 50, 80],
          pos: [22, -62],
          deps: [0],
		}, {
          name: 'Alter Self',
		  levels: 2,
          desc: ['Choose an attribute to raise by 50 points.','Choose an attribute to raise by 50 points, and two resistances to raise by 25%.'],
          req: [60, 90],
          pos: [62, -98],
          deps: [12],
		}, {
          name: 'Atronach',
          desc: ['30% chance to absorb incoming spells, replenishing your Magicka.'],
          req: [80],
          pos: [49, -148],
          deps: [13],
		}, {
          name: 'Arcane Guidance',
          desc: ['Detection spells reveal targets from much farther away.'],
          req: [70],
          pos: [86, -145],
          deps: [13],
		}, {
          name: 'Hethoth\'s Escape',
          desc: ['Once every 10 minutes, paralyzes a melee attacker that is about to deal lethal damage to you.'],
          req: [90],
          pos: [120, -168],
          deps: [15],
		}, {
          name: 'Battlemage',
		  levels: 2,
          desc: ['Your weapon attacks improve your spells cast on the target by 15% for 3 seconds.','Your weapon attacks improve your spells cast on the target by 30% for 3 seconds.'],
          req: [30, 60],
          pos: [67, -71],
          deps: [12],
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'Enchanting Mastery',
          desc: ['New enchantments are 1% stronger per level of Enchanting.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Soul Squeezer',
          desc: ['Soul gems give 250 extra charge when used to recharge weapons.'],
          req: [20],
          pos: [-70, -19],
          deps: [0],
		}, {
          name: 'Soul Siphon',
          desc: ['Death blows with enchanted weapons to creatures trap 5% of the victim\'s soul, recharging the weapon. Does not apply to staves.'],
          req: [40],
          pos: [-112, -58],
          deps: [1],
		}, {
          name: 'Thunderstruck',
          desc: ['Weapon enchantments are 50% stronger when delivered by a power attack.'],
          req: [60],
          pos: [-99, -92],
          deps: [2],
		}, {
          name: 'Power Stone',
		  levels: 3,
          desc: ['Staves are 25% stronger, and an equipped staff improves other weapon enchantments by 25%.','Staves are 50% stronger, and an equipped staff improves other weapon enchantments by 50%.','Staves are 100% stronger, and an equipped staff improves other weapon enchantments by 100%.'],
          req: [20, 50, 80],
          pos: [-60, -48],
          deps: [0],
		}, {
          name: 'Mana Stone',
          desc: ['Staves cost 50% less charge, and an equipped staff reduces the charge cost of other weapon enchantments by 50%.'],
          req: [50],
          pos: [-67, -106],
          deps: [4],
		}, {
          name: 'Mana Shield',
          desc: ['Take 25% less damage from attacks if you have a staff equipped and no shield.'],
          req: [70],
          pos: [-112, -138],
          deps: [5],
		}, {
          name: 'Staff Recharge',
          desc: ['After using a staff, the spent charge regenerates at a rate of 5 points per second.'],
          req: [80],
          pos: [-90, -167],
          deps: [5],
		}, {
          name: 'Weapon Enchanter',
          desc: ['New enchantments placed on weapons are 25% stronger.'],
          req: [30],
          pos: [-31, -71],
          deps: [0],
		}, {
          name: 'Soul Enchanter',
          desc: ['New enchantments placed on weapons have 1000 extra charge.'],
          req: [60],
          pos: [-35, -156],
          deps: [8],
		}, {
          name: 'Armor Enchanter',
          desc: ['New enchantments placed on armor pieces or clothing are 25% stronger.'],
          req: [30],
          pos: [22, -72],
          deps: [0],
		}, {
          name: 'Regalia Enchanter',
          desc: ['New enchantments placed on necklaces, robes, hoods and circlets are 15% stronger.'],
          req: [70],
          pos: [19, -163],
          deps: [10],
		}, {
          name: 'Extra Effect',
          desc: ['Can place two enchantments upon the same item.'],
          req: [100],
          pos: [-12, -232],
          deps: [9, 11],
		}, {
          name: 'Scroll Sage',
		  levels: 3,
          desc: ['Scrolls are 100% stronger.','Scrolls are 150% stronger.','Scrolls are 200% stronger.'],
          req: [40, 70, 100],
          pos: [52, -48],
          deps: [0],
		}, {
          name: 'Scroll Hunter',
          desc: ['10% chance to find a random scroll on the corpses of people you kill.'],
          req: [50],
          pos: [88, -120],
          deps: [13],
		}, {
          name: 'Spider Hunter',
          desc: ['5% chance to find a random imbued spider on the corpses of people you kill.'],
          req: [90],
          pos: [42, -208],
          deps: [14],
		
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Steel Smithing',
          desc: ['Can create Steel armor and weapons at forges, and improve them twice as much.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Dwarven Smithing',
          desc: ['Can create Dwarven armor and weapons at forges, and improve them twice as much.'],
          req: [30],
          pos: [-60, -35],
          deps: [0],
		}, {
          name: 'Orcish Smithing',
          desc: ['Can create Orcish armor and weapons at forges, and improve them twice as much.'],
          req: [50],
          pos: [-60, -104],
          deps: [1],
		}, {
          name: 'Ebony Smithing',
          desc: ['Can create Ebony armor and weapons at forges, and improve them twice as much.'],
          req: [80],
          pos: [-100, -171],
          deps: [2],
		}, {
          name: 'Daedric Smithing',
          desc: ['Can create Daedric armor and weapons at forges, and improve them twice as much.'],
          req: [90],
          pos: [-32, -199],
          deps: [3],
		}, {
          name: 'Armor Padding',
          desc: ['Can create Linen and Leather padding at a tanning rack. They are clothing or Light Armor, function as body armor, and can be enchanted at 25% strength.'],
          req: [20],
          pos: [-23, -47],
          deps: [0],
		}, {
          name: 'Layered Plates',
          desc: ['Can create Steel, Dwarven and Orichalcum armor plates at forges. They are Heavy Armor, function as body armor and can be enchanted at 25% strength.'],
          req: [60],
          pos: [-28, -92],
          deps: [5],
		}, {
          name: 'Hidden Enchantments',
          desc: ['Can now enchant padding and armor plates at 50% strength.'],
          req: [90],
          pos: [23, -119],
          deps: [6],
		}, {
          name: 'Arcane Blacksmith',
          desc: ['Can temper enchanted weapons and armor.'],
          req: [40],
          pos: [38, -71],
          deps: [0],
		}, {
          name: 'Elven Smithing',
          desc: ['Can create Elven armor and weapons at forges, and improve them twice as much.'],
          req: [30],
          pos: [60, -35],
          deps: [0],
		}, {
          name: 'Advanced Armors',
          desc: ['Can create Scaled and Plate armor at forges, and improve them twice as much.'],
          req: [50],
          pos: [95, -105],
          deps: [9],
		}, {
          name: 'High Yield Mining',
          desc: ['Ore veins produce twice as much ore when mined.'],
          req: [80],
          pos: [13, -168],
          deps: [02, 10],
		}, {
          name: 'Glass Smithing',
          desc: ['Can create Glass armor and weapons at forges, and improve them twice as much.'],
          req: [70],
          pos: [135, -140],
          deps: [10],
		}, {
          name: 'Dragon Armor',
          desc: ['Can create Dragon armor and Dragonbone weapons at forges, and improve them twice as much.'],
          req: [100],
          pos: [70, -210],
          deps: [4, 12],
		
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'Heavy Armor Mastery',
          desc: ['Armor rating of Heavy Armor pieces increased by 1% per level of Heavy Armor.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Battle Fatigue',
          desc: ['Take up to 20% less attack damage from opponents with low Stamina if wearing all Heavy Armor.'],
          req: [30],
          pos: [-60, -34],
          deps: [0],
		}, {
          name: 'Immovable Object',
          desc: ['Taking an incoming hit in all Heavy Armor has 10% chance to stagger the attacker.'],
          req: [40],
          pos: [-97, -75],
          deps: [1],
		}, {
          name: 'Reap the Whirlwind',
          desc: ['Taking an incoming hit in all Heavy Armor grants 15% extra attack damage and critical damage against the attacker for 5 seconds.'],
          req: [60],
          pos: [-89, -123],
          deps: [2],
		}, {
          name: 'Face of the Mountain',
          desc: ['Taking an incoming power attack or bash in all Heavy Armor always staggers the attacker with 25% chance to knock them down.'],
          req: [100],
          pos: [-102, -202],
          deps: [3],
		}, {
          name: 'Cushioned',
		  levels: 2,
          desc: ['You take half damage from falling if wearing all Heavy Armor.','You take no damage from falling if wearing all Heavy Armor.'],
          req: [20, 50],
          pos: [-18, -51],
          deps: [0],
		}, {
          name: 'Heavy Armor Fit',
          desc: ['Armor rating of Heavy Armor pieces increased by 15% if wearing all Heavy Armor.'],
          req: [30],
          pos: [40, -39],
          deps: [0],
		}, {
          name: 'Heavy Armor Training',
          desc: ['Heavy Armor weighs nothing and doesn\'t slow you down when worn.'],
          req: [50],
          pos: [52, -88],
          deps: [6],
		}, {
          name: 'Tower of Strength',
          desc: ['Take 25% less damage from power attacks and bashes if wearing all Heavy Armor.'],
          req: [60],
          pos: [28, -138],
          deps: [7],
		}, {
          name: 'Elemental Defense',
          desc: ['Take 15% less elemental damage if wearing all Heavy Armor.'],
          req: [80],
          pos: [38, -178],
          deps: [8],
		}, {
          name: 'Glancing Blows',
          desc: ['Immune to weapon specific perks such as Denting Blows and Mortal Wounds if wearing all Heavy Armor.'],
          req: [90],
          pos: [69, -200],
          deps: [9],
		}, {
          name: 'Matching Heavy Set',
          desc: ['Armor rating of Heavy Armor pieces increased by 15% if wearing a matched set of 3 or more Heavy Armor pieces.'],
          req: [70],
          pos: [71, -128],
          deps: [7],
		}, {
          name: 'Face of Death',
          desc: ['Other Heavy Armor perks no longer require a helmet. Armor rating of Heavy Armor pieces increased by 20% if not wearing a helmet.'],
          req: [40],
          pos: [84, -53],
          deps: [6],
		
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Block Mastery',
          desc: ['Blocking is 0.5% more effective per level of Block.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Weapon Block',
          desc: ['Blocking with weapons is 25% more effective.'],
          req: [30],
          pos: [-63, -11],
          deps: [0],
		}, {
          name: 'Unwavering Defense',
          desc: ['Blocking an attack damages the attacker\'s Stamina by 15 points.'],
          req: [20],
          pos: [-95, -51],
          deps: [0],
		}, {
          name: 'Poke the Dragon',
          desc: ['Blocking an attack has 15% chance to stagger the attacker, exposing them to a critical strike counterattack within 3 seconds for 2 times critical damage.'],
          req: [60],
          pos: [-81, -123],
          deps: [2],
		}, {
          name: 'Deflect Arrows',
          desc: ['Arrows do half damage while blocking. Arrows that hit a shield do no damage.'],
          req: [30],
          pos: [1, -42],
          deps: [0],
		}, {
          name: 'Elemental Protection',
          desc: ['Blocking with a shield reduces elemental damage taken by 50%.'],
          req: [50],
          pos: [-53, -83],
          deps: [4],
		}, {
          name: 'Block Runner',
          desc: ['Can move at full speed while blocking.'],
          req: [70],
          pos: [-18, -97],
          deps: [4],
		}, {
          name: 'Shield Charge',
          desc: ['Able to sprint with a shield raised, knocking opponents down for 15 points of Stamina per second.'],
          req: [90],
          pos: [3, -123],
          deps: [6],
		}, {
          name: 'Quick Reflexes',
          desc: ['Time slows down if you are blocking during an enemy\'s power attack.'],
          req: [40],
          pos: [46, -53],
          deps: [0],
		}, {
          name: 'Power Bash',
          desc: ['Able to do a power bash by holding down Attack while blocking.'],
          req: [20],
          pos: [69, -20],
          deps: [0],
		}, {
          name: 'Deadly Bash',
		  levels: 2,
          desc: ['Bashing deals five times as much damage.','Bashing deals fifteen times as much damage.'],
          req: [50, 80],
          pos: [91, -75],
          deps: [9],
		}, {
          name: 'Dragon Tail',
          desc: ['Bashing to interrupt a power attack has 30% chance to knock the attacker down, potentially disarming them.'],
          req: [90],
          pos: [55, -129],
          deps: [10],
		}, {
          name: 'Stoneheart',
          desc: ['Can\'t be staggered by power attacks and bashes while blocking.'],
          req: [100],
          pos: [-8, -168],
          deps: [3, 7, 11],
		}, {
          name: 'Mocking Blow',
          desc: ['Power bashing taunts the opponent, forcing them to attack you and reducing their attack damage by 15%, fading over 10 seconds.'],
          req: [80],
          pos: [100, -122],
          deps: [10],
		}, {
          name: 'Torch Bash',
          desc: ['Bashing with a torch deals ten times as much fire damage and causes living opponents to flee in panic.'],
          req: [40],
          pos: [102, -43],
          deps: [9],
		


        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'Two-Handed Mastery',
          desc: ['Two-handed weapons do 1% more damage and 5% more critical damage per level of Two-Handed.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Death or Glory',
          desc: ['Two-handed power attacks deal up to 100% more damage below half Health. Damage increases as your Health decreases.'],
          req: [40],
          pos: [-95, -32],
          deps: [0],
		}, {
          name: 'Berserker',
          desc: ['25% chance to resist stagger during your two-handed power attack.'],
          req: [60],
          pos: [-90, -89],
          deps: [1],
		}, {
          name: 'Bear Hide',
          desc: ['Take 50% less attack damage during your two-handed power attack.'],
          req: [80],
          pos: [-110, -158],
          deps: [2],
		}, {
          name: 'Overbearing Assault',
		  levels: 2,
          desc: ['Greatswords reduce attack damage by 15% for 10 seconds.','Greatswords reduce attack damage by 20% for 10 seconds.'],
          req: [30, 60],
          pos: [-55, -71],
          deps: [0],
		}, {
          name: 'Coup de Grace',
          desc: ['Power attacks with a greatsword execute targets below 30% Health, inflicting a critical strike for 10 times critical damage and knocking the target down.'],
          req: [70],
          pos: [-60, -152],
          deps: [4],
		}, {
          name: 'Crushing Blows',
		  levels: 2,
          desc: ['Warhammers reduce armor by 150 points for 10 seconds.','Warhammers reduce armor by 200 points for 10 seconds.'],
          req: [30, 60],
          pos: [-12, -83],
          deps: [0],
		}, {
          name: 'Shattering Strike',
          desc: ['Power attacks with a warhammer interrupt spellcasting, inflicting a critical strike for 3 times critical damage, silencing and immobilizing the target for 5 seconds.'],
          req: [70],
          pos: [-6, -144],
          deps: [6]
		}, {
          name: 'Mortal Wounds',
		  levels: 2,
          desc: ['Battleaxes wound the living for 10 seconds. Deal 15% more attack damage to wounded targets.','Battleaxes wound the living for 10 seconds. Deal 20% more attack damage to wounded targets.'],
          req: [30, 60],
          pos: [36, -65],
          deps: [0],
		}, {
          name: 'Hook Blade',
          desc: ['Power attacks with a battleaxe smash through a block, inflicting a critical strike for 3 times critical damage and knocking the target down.'],
          req: [70],
          pos: [34, -144],
          deps: [8],
		}, {
          name: 'Crowd Pleaser',
          desc: ['Killing an opponent with a two-handed weapon raises two-handed damage by 15% for 20 seconds.'],
          req: [100],
          pos: [-7, -225],
          deps: [5, 7, 9],
		}, {
          name: 'Brutal Fighter',
          desc: ['Two-handed power attacks cost 25% less Stamina.'],
          req: [20],
          pos: [58, -17],
          deps: [0],
		}, {
          name: 'Ferocious Strength',
          desc: ['Two-handed power attacks do 0.1% more damage per point of Stamina. Unlocks decapitations.'],
          req: [40],
          pos: [98, -65],
          deps: [11],
		}, {
          name: 'Vicious Charge',
          desc: ['Can do a two-handed sprinting power attack for up to 50% more damage and critical damage to high Health targets.'],
          req: [50],
          pos: [69, -102],
          deps: [12],
		}, {
          name: 'Rolling Charge',
          desc: ['Build up speed during a long distance sprinting power attack, inflicting a critical strike for 4 times critical damage if enough speed is accumulated.'],
          req: [80],
          pos: [70, -136],
          deps: [13],
		}, {
          name: 'Warmaster',
          desc: ['Two-handed forwards power attacks have 25% chance to paralyze targets, inflicting a critical strike for 2 times critical damage.'],
          req: [60],
          pos: [111, -113],
          deps: [12],
		}, {
          name: 'Sweep',
          desc: ['Two-handed sideways power attacks hit all targets in front of you, dealing 25% more damage to each.'],
          req: [90],
          pos: [92, -172],
          deps: [15],
		
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'One-Handed Mastery',
          desc: ['One-handed weapons do 1% more damage and 5% more critical damage per level of One-Handed.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Dual Flurry',
		  levels: 2,
          desc: ['Dual wielding attacks are 20% faster.','Dual wielding attacks are 35% faster.'],
          req: [30, 60],
          pos: [-81, -25],
          deps: [0],
		}, {
          name: 'Dual Savagery',
          desc: ['Dual wielding power attacks deal 50% more damage and stagger 50% more.'],
          req: [60],
          pos: [-130, -78],
          deps: [1],
		}, {
          name: 'Bladedancer',
          desc: ['Take 50% less attack damage while power attacking with two weapons.'],
          req: [80],
          pos: [-110, -142],
          deps: [2],
		}, {
          name: 'Overpowering Assault',
		  levels: 2,
          desc: ['Swords reduce attack damage by 10% for 10 seconds.','Swords reduce attack damage by 15% for 10 seconds.'],
          req: [30, 60],
          pos: [-72, -65],
          deps: [0],
		}, {
          name: 'Execute',
          desc: ['Power attacks with a sword execute targets below 25% Health, inflicting a critical strike for 10 times critical damage.'],
          req: [70],
          pos: [-67, -151],
          deps: [4],
		}, {
          name: 'Denting Blows',
		  levels: 2,
          desc: ['Maces reduce armor by 100 points for 10 seconds.','Maces reduce armor by 150 points for 10 seconds.'],
          req: [30, 60],
          pos: [-28, -59],
          deps: [0],
		}, {
          name: 'Disrupting Strike',
          desc: ['Power attacks with a mace interrupt spellcasting, inflicting a critical strike for 3 times critical damage and silencing the target for 5 seconds.'],
          req: [70],
          pos: [-30, -140],
          deps: [6],
		}, {
          name: 'Grievous Wounds',
		  levels: 2,
          desc: ['War axes wound the living for 10 seconds. Deal 10% more attack damage to wounded targets.','War axes wound the living for 10 seconds. Deal 15% more attack damage to wounded targets.'],
          req: [30, 60],
          pos: [10, -75],
          deps: [0],
		}, {
          name: 'Shieldbiter',
          desc: ['Power attacks with a war axe smash through a shield, inflicting a critical strike for 5 times critical damage and forcing them to drop their shield.'],
          req: [70],
          pos: [7, -151],
          deps: [8],
		}, {
          name: 'Fangs',
		  levels: 2,
          desc: ['Daggers deal 10% more damage if the target is poisoned or bleeding.','Daggers deal 20% more damage if the target is poisoned or bleeding.'],
          req: [30, 60],
          pos: [48, -56],
          deps: [0],
		}, {
          name: 'Spitting Cobra',
          desc: ['Power attacks with a dagger bleed the living for 30 seconds, inflicting a critical strike for 3 times critical damage.'],
          req: [70],
          pos: [41, -144],
          deps: [10],
		}, {
          name: 'Victory Rush',
          desc: ['Killing an opponent with a one-handed weapon replenishes 100 points of Stamina.'],
          req: [100],
          pos: [-20, -224],
          deps: [5, 7, 9, 11],
		}, {
          name: 'Disciplined Fighter',
          desc: ['One-handed power attacks cost 25% less Stamina.'],
          req: [20],
          pos: [87, -29],
          deps: [0],
		}, {
          name: 'Furious Strength',
          desc: ['One-handed power attacks do 0.1% more damage per point of Stamina. Unlocks decapitations.'],
          req: [40],
          pos: [81, -76],
          deps: [13],
		}, {
          name: 'Valorous Charge',
          desc: ['Can do a one-handed sprinting power attack for up to 50% more damage and critical damage to high Health targets.'],
          req: [50],
          pos: [61, -103],
          deps: [14],
		}, {
          name: 'Crater Maker',
          desc: ['One-handed forwards power attacks have 25% chance to knock targets down, inflicting a critical strike for 2 times critical damage.'],
          req: [60],
          pos: [98, -112],
          deps: [14],
		}, {
          name: 'Disarming Slash',
          desc: ['One-handed sideways power attacks have 25% chance to disarm targets, inflicting a critical strike for 2 times critical damage.'],
          req: [90],
          pos: [78, -162],
          deps: [16],
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Archery Mastery',
          desc: ['Ranged weapons do 1% more damage and 5% more critical damage per level of Archery.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Far Shot',
		  levels: 2,
          desc: ['Ranged weapons do up to 20% more damage to targets beyond 60 feet, based on distance.','Ranged weapons do up to 40% more damage to targets beyond 60 feet, based on distance.'],
          req: [20, 50],
          pos: [-69, -48],
          deps: [0],
		}, {
          name: 'Impaling Shot',
          desc: ['Ranged weapons wound the living for 15 seconds, causing them to bleed while running.'],
          req: [40],
          pos: [-102, -92],
          deps: [1],
		}, {
          name: 'Arrow to the Knee',
          desc: ['Ranged weapons knock targets down if they are sprinting, inflicting a critical strike for 2 times critical damage.'],
          req: [80],
          pos: [-94, -167],
          deps: [2],
		}, {
          name: 'Point Blank Shot',
		  levels: 2,
          desc: ['Ranged weapons do up to 20% more damage to targets within 20 feet, based on proximity.','Ranged weapons do up to 40% more damage to targets within 20 feet, based on proximity.'],
          req: [20, 50],
          pos: [-20, -50],
          deps: [0],
		}, {
          name: 'Breaching Shot',
          desc: ['Ranged weapons knock the shield out of an opponent\'s hands if they are blocking, inflicting a critical strike.'],
          req: [40],
          pos: [-22, -92],
          deps: [4],
		}, {
          name: 'Power Shot',
          desc: ['Ranged weapons have 25% chance to stagger most targets.'],
          req: [50],
          pos: [-68, -119],
          deps: [2, 5],
		}, {
          name: 'Ranger',
          desc: ['Can move at full speed with a drawn bow.'],
          req: [60],
          pos: [-63, -145],
          deps: [6],
		}, {
          name: 'Quick Shot',
          desc: ['Can draw a bow or reload a crossbow 30% faster.'],
          req: [70],
          pos: [-52, -181],
          deps: [7],
		}, {
          name: 'Gore',
          desc: ['Ranged weapons interrupt power attacks, knocking the attacker back and inflicting a critical strike for 2 times critical damage.'],
          req: [80],
          pos: [-34, -156],
          deps: [5],
		}, {
          name: 'Pinning Shot',
          desc: ['Ranged weapons slow targets by 10% per hit for 15 seconds.'],
          req: [100],
          pos: [-30, -220],
          deps: [3, 9],
		}, {
          name: 'Eagle Eye',
          desc: ['Pressing Block while aiming will zoom in your view.'],
          req: [30],
          pos: [34, -49],
          deps: [0],
		}, {
          name: 'Hunter\'s Discipline',
          desc: ['Recover twice as many arrows and bolts from dead bodies.'],
          req: [50],
          pos: [8, -122],
          deps: [11],
		}, {
          name: 'Hunter\'s Focus',
          desc: ['Can\'t be staggered by power attacks or bashes while drawing a bow or holding a shot.'],
          req: [90],
          pos: [40, -177],
          deps: [12],
		}, {
          name: 'Steady Hand',
		  levels: 2,
          desc: ['Pressing Block while aiming will zoom in your view and slow time by 25%.','Pressing Block while aiming will zoom in your view and slow time by 50%.'],
          req: [40, 70],
          pos: [53, -103],
          deps: [11],
		}, {
          name: 'Lion\'s Arrow',
		  levels: 2,
          desc: ['Dual cast a projectile spell out of combat to imprint it. Fully drawn bow shots trigger a copy of the spell at 60% power.','Dual cast a projectile spell out of combat to imprint it. Fully drawn bow shots trigger a copy of the spell at 100% power.'],
          req: [60, 90],
          pos: [83, -121],
          deps: [13],
		
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
      perks: [
        {
          name: 'Light Armor Mastery',
          desc: ['Armor rating of Light Armor pieces increased by 1% per level of Light Armor.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Iron Fist',
		  levels: 3,
          desc: ['Deal extra unarmed damage equal to 5% of current Stamina if both hands are empty, gaining Light Armor experience.','Deal extra unarmed damage equal to 15% of current Stamina if both hands are empty, gaining Light Armor experience.','Deal extra unarmed damage equal to 30% of current Stamina if both hands are empty, gaining Light Armor experience.'],
          req: [20, 50, 80],
          pos: [-51, -32],
          deps: [0],
		}, {
          name: 'Flurry of Blows',
		  levels: 2,
          desc: ['Power attacks with two empty hands cost 25% less Stamina and have a 50% chance to stagger opponents, potentially disarming them.','Power attacks with two empty hands cost 50% less Stamina and have a 50% chance to stagger opponents, potentially disarming them.'],
          req: [60, 90],
          pos: [-82, -95],
          deps: [1],
		}, {
          name: 'Ki Strike',
          desc: ['Power attacks with two empty hands deal 60 points of random elemental damage.'],
          req: [90],
          pos: [-72, -162],
          deps: [2],
		}, {
          name: 'Light Armor Fit',
          desc: ['Armor rating of Light Armor pieces increased by 15% if wearing all Light Armor.'],
          req: [30],
          pos: [-12, -35],
          deps: [0],
		}, {
          name: 'Light Armor Training',
          desc: ['Light Armor weighs nothing and doesn\'t slow you down when worn.'],
          req: [50],
          pos: [-26, -86],
          deps: [4],
		}, {
          name: 'Matching Light Set',
          desc: ['Armor rating of Light Armor pieces increased by 15% if wearing a matched set of 3 or more Light Armor pieces.'],
          req: [70],
          pos: [-57, -131],
          deps: [5],
		}, {
          name: 'Tough Hide',
          desc: ['Wearing all Light Armor grants 40% Poison Resist and Disease Resist.'],
          req: [80],
          pos: [-27, -155],
          deps: [5],
		}, {
          name: 'Keen Senses',
          desc: ['Other Light Armor perks no longer require a helmet. Armor rating of Light Armor pieces increased by 20% if not wearing a helmet.'],
          req: [40],
          pos: [0, -69],
          deps: [4],
		}, {
          name: 'Agility',
          desc: ['Regenerate an additional 2% of your maximum Stamina per second if wearing all Light Armor.'],
          req: [20],
          pos: [22, -39],
          deps: [0],
		}, {
          name: 'Windrunner',
          desc: ['Move 10% faster if wearing all Light Armor.'],
          req: [40],
          pos: [22, -88],
          deps: [9],
		}, {
          name: 'Wardancer',
          desc: ['Your attacks deal 15% more damage and critical damage in all Light Armor. Taking an unblocked hit disables this effect for 10 seconds.'],
          req: [60],
          pos: [15, -122],
          deps: [10],
		}, {
          name: 'Evasive Sprint',
          desc: ['While sprinting in all Light Armor, incoming attacks and spells always miss and weight does not affect Stamina drain.'],
          req: [80],
          pos: [2, -164],
          deps: [11],
		}, {
          name: 'Untouchable',
          desc: ['Move 10% faster in combat in all Light Armor. Taking an unblocked hit disables this effect for 10 seconds.'],
          req: [100],
          pos: [58, -174],
          deps: [11],
		
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'Sneak Mastery',
          desc: ['You are 0.5% harder to detect when sneaking per level of Sneak.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Silent Roll',
		  levels: 2,
          desc: ['Sprinting while sneaking executes a silent forward roll for 15 Stamina.','Sprinting while sneaking executes a silent forward roll for 15 Stamina. You are 100% harder to detect while rolling.'],
          req: [30, 60],
          pos: [-57, -69],
          deps: [0],
		}, {
          name: 'Dodge Roll',
          desc: ['Performing a silent roll briefly causes all incoming attacks and spells to miss.'],
          req: [60],
          pos: [-36, -160],
          deps: [1],
		}, {
          name: 'Sneak Attack',
          desc: ['Sneak attacks with one-handed weapons deal 100% more damage.'],
          req: [20],
          pos: [-7, -48],
          deps: [0],
		}, {
          name: 'Deadly Aim',
          desc: ['Sneak attacks with bows deal 50% more damage.'],
          req: [40],
          pos: [-26, -88],
          deps: [3],
		}, {
          name: 'Assassin\'s Blade',
          desc: ['Sneak attacks with daggers deal 150% more damage.'],
          req: [50],
          pos: [11, -100],
          deps: [3],
		}, {
          name: 'Backstab',
          desc: ['Daggers deal 25% more damage and critical damage from behind.'],
          req: [70],
          pos: [6, -141],
          deps: [5],
		}, {
          name: 'Cloak and Dagger',
          desc: ['Sneak attack with daggers from invisibility also inflict a critical strike for 6 times critical damage.'],
          req: [80],
          pos: [32, -160],
          deps: [6],
		}, {
          name: 'Shadow Warrior',
          desc: ['Entering sneak mode (5 second cooldown) or performing a silent roll in combat briefly makes you invisible, forcing opponents to search for you.'],
          req: [90],
          pos: [25, -202],
          deps: [2, 7],
		}, {
          name: 'Silent Movement',
		  levels: 2,
          desc: ['Movement noise is reduced by 50%.','Movement noise is reduced by 100%.'],
          req: [30, 60],
          pos: [55, -45],
          deps: [0],
		}, {
          name: 'Blind Spot',
          desc: ['You are up to 30% harder to detect by those within 30 feet when sneaking.'],
          req: [50],
          pos: [35, -120],
          deps: [9],
		}, {
          name: 'Escape Artist',
          desc: ['Entering sneak mode causes all opponents who are searching for you to abandon their search.'],
          req: [100],
          pos: [80, -192],
          deps: [10],
		}, {
          name: 'Fog of War',
          desc: ['You are 25% harder to detect by opponents in combat.'],
          req: [90],
          pos: [74, -134],
          deps: [10],
		}, {
          name: 'Light Foot',
          desc: ['You won\'t trigger pressure plates.'],
          req: [60],
          pos: [95, -105],
          deps: [9],
		}, {
          name: 'Shadowcaster',
          desc: ['Destruction spells are twice as powerful against targets that are not detecting you.'],
          req: [40],
          pos: [59, -21],
          deps: [0],
		
        }
      ]
    }, {
      name: 'Lockpicking',
      cname: 'lockpicking',
      perks: [
        {
          name: 'Lockpicking Mastery',
          desc: ['Locks are 1% easier to pick per level of Lockpicking.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Looter',
          desc: ['In most dungeons, chests contain up to 100 more gold and many other containers contain up to 10 more gold.'],
          req: [20],
          pos: [-20, -40],
          deps: [0],
		}, {
          name: 'Treasure Hunter',
          desc: ['In most dungeons, regular chests are 50% more likely to contain an additional weapon or armor piece.'],
          req: [60],
          pos: [-31, -89],
          deps: [1],
		}, {
          name: 'Archaeologist',
          desc: ['In most dungeons, special chests contain six additional weapons or armor pieces.'],
          req: [90],
          pos: [-67, -108],
          deps: [2],
		}, {
          name: 'Lockdown',
          desc: ['Can lockpick a hostile automaton to shut it down, reducing Health to 1. Damaged automatons are easier to pick.'],
          req: [40],
          pos: [13, -62],
          deps: [0],
		}, {
          name: 'Hotwire',
          desc: ['Can lockpick an automaton under Lockdown to reprogram it, making it follow you and fight for you.'],
          req: [60],
          pos: [2, -121],
          deps: [4],
		}, {
          name: 'Overdrive',
          desc: ['Hotwired automatons get 50% increased attack damage, 200 points of armor, and move 20% faster.'],
          req: [90],
          pos: [-37, -150],
          deps: [5],
		}, {
          name: 'Quick Hands',
          desc: ['Able to pick locks without others realizing that you are committing a crime.'],
          req: [30],
          pos: [49, -52],
          deps: [0],
		}, {
          name: 'Dungeon Master',
          desc: ['Most traps deal half damage to you, and five times as much damage to others.'],
          req: [70],
          pos: [35, -121],
          deps: [7],
		}, {
          name: 'Wax Key',
          desc: ['Picking a lock gives you a copy of its key if it has one.'],
          req: [50],
          pos: [67, -97],
          deps: [7],
		}, {
          name: 'Lucky Guess',
          desc: ['Pick starts much closer to the lock opening position.'],
          req: [80],
          pos: [80, -120],
          deps: [9],
		}, {
          name: 'Lockmaster',
          desc: ['Can bypass locks of Expert or lower level without using a key or manually picking the lock.'],
          req: [100],
          pos: [93, -153],
          deps: [10],
		
        }
      ]
    }, {
      name: 'Pickpocket',
      cname: 'pickpocket',
      perks: [
        {
          name: 'Pickpocket Mastery',
          desc: ['Pickpocketing odds increased by 1% per level of Pickpocket.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Payday',
          desc: ['Most citizens carry 100 more gold on average.'],
          req: [30],
          pos: [-46, -48],
          deps: [0],
		}, {
          name: 'Conspicuous Wealth',
          desc: ['The richest citizens carry more valuables such as gems, enchanted jewelry, and spell tomes.'],
          req: [80],
          pos: [-50, -118],
          deps: [1],
		}, {
          name: 'Master Thief',
          desc: ['Pickpocketing a character automatically steals all of their gold, with no chance of detection.'],
          req: [90],
          pos: [-20, -169],
          deps: [2],
		}, {
          name: 'Cutpurse',
          desc: ['Odds of pickpocketing gold, keys, gems and jewelry increased by 50%.'],
          req: [20],
          pos: [-4, -34],
          deps: [0],
		}, {
          name: 'Oblivious',
          desc: ['Pickpocketing odds increased by 25% if the target is not detecting you.'],
          req: [30],
          pos: [0, -64],
          deps: [4],
		}, {
          name: 'Lawless Times',
		  levels: 2,
          desc: ['Your bounties for nonviolent crimes diminish at a rate of 50 gold per day.','Your bounties for nonviolent crimes diminish at a rate of 200 gold per day.'],
          req: [60, 90],
          pos: [13, -147],
          deps: [5],
		}, {
          name: 'Death\'s Emperor',
		  levels: 2,
          desc: ['A cursed septim that reduces armor by 500 points and inflicts 50% weakness to magic when placed in a person\'s pockets.','A cursed septim that reduces armor by 1500 points and inflicts 150% weakness to magic when placed in a person\'s pockets.'],
          req: [40, 70],
          pos: [38, -65],
          deps: [4],
		}, {
          name: 'Poisoned',
          desc: ['Silently harm people by placing poisons in their pockets while pickpocketing.'],
          req: [40],
          pos: [32, -92],
          deps: [5, 7],
		}, {
          name: 'Trickster',
          desc: ['Can pickpocket equipped weapons, necklaces and rings.'],
          req: [70],
          pos: [42, -129],
          deps: [8],
		}, {
          name: 'Perfect Touch',
          desc: ['Can pickpocket equipped items.'],
          req: [100],
          pos: [65, -172],
          deps: [9],
		}, {
          name: 'Extra Pockets',
          desc: ['Carrying capacity is increased by 100 points.'],
          req: [50],
          pos: [52, -32],
          deps: [0],
		
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Speech Mastery',
          desc: ['Sell items for 0.5% more and buy items for 0.5% less per level of Speech.'],
          req: [0],
          pos: [0, 0],
        }, {
          name: 'Kinship',
          desc: ['Sell items for 15% more and buy items for 15% less when trading with the same race.'],
          req: [30],
          pos: [-52, -31],
          deps: [0],
		}, {
          name: 'Salesman',
          desc: ['Can sell any type of item to any kind of merchant.'],
          req: [50],
          pos: [-23, -110],
          deps: [1],
		}, {
          name: 'Investor',
          desc: ['Can invest with shopkeepers to increase their inventory and available gold.'],
          req: [60],
          pos: [-69, -113],
          deps: [2],
		}, {
          name: 'Private Stock',
          desc: ['Shopkeepers you have invested in sell additional enchanted weapons, armor pieces, jewelry, spell tomes and alchemy ingredients.'],
          req: [80],
          pos: [-89, -152],
          deps: [3],
		}, {
          name: 'Master Trader',
          desc: ['Every merchant in the world gains additional gold for bartering.'],
          req: [90],
          pos: [-57, -192],
          deps: [4],
		}, {
          name: 'Fence',
          desc: ['Can barter stolen goods with any merchant.'],
          req: [80],
          pos: [-36, -140],
          deps: [2],
		}, {
          name: 'Speak with Animals',
          desc: ['Can tame an animal, making it a Wild Companion and teaching it to follow you and fight for you.'],
          req: [40],
          pos: [0, -52],
          deps: [0],
		}, {
          name: 'Beastmaster',
          desc: ['Tamed animals get 50% increased attack damage, 150 points of Health, and move 25% faster.'],
          req: [70],
          pos: [39, -117],
          deps: [7],
		}, {
          name: 'Tonal Harmony',
          desc: ['Shouting restores Health, Magicka and Stamina equal to its cooldown in seconds.'],
          req: [20],
          pos: [62, -45],
          deps: [0],
		}, {
          name: 'Words of Power',
		  levels: 3,
          desc: ['Your shouts are 25% better.','Your shouts are 50% better.','Your shouts are 100% better.'],
          req: [40, 70, 100],
          pos: [84, -97],
          deps: [9],
		}, {
          name: 'Dovahzulaan',
          desc: ['25% chance that your shout cooldown immediately finishes.'],
          req: [100],
          pos: [101, -182],
          deps: [10],
		}, {
          name: 'Skald',
          desc: ['Power attacks reduce the remaining duration of your shout cooldown by 5 seconds.'],
          req: [60],
          pos: [128, -117],
          deps: [10],
		}, {
          name: 'Bribery',
          desc: ['Can bribe guards to ignore crimes.'],
          req: [30],
          pos: [79, -16],
          deps: [0],
		}, {
          name: 'Eloquent',
          desc: ['Intimidation and persuasion attempts are more likely to succeed.'],
          req: [50],
          pos: [112, -58],
          deps: [13],
		
		
        }
      ]
    }
  ];

}).call(this);
