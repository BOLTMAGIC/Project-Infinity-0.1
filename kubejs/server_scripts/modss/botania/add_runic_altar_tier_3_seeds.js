ServerEvents.recipes(function (event) {
  // runic(output, base, materialsArray, mana, essences)
  function runic (output, base, materials, mana, essences) {
    if (materials === undefined) materials = [];
    mana = typeof mana === 'number' ? mana : 5000;
    essences = typeof essences === 'number' ? essences : 4;

    function expandMaterial (entry) {
      var results = [];

      // String syntax: "mod:item*4" or "tag:mod:tagname*3"
      if (typeof entry === 'string') {
        var count = 1;
        var idx = entry.indexOf('*');
        var name = entry;
        if (idx > -1) {
          name = entry.substring(0, idx);
          var parsed = parseInt(entry.substring(idx + 1), 10);
          if (!isNaN(parsed) && parsed > 0) count = parsed;
        }
        if (name.indexOf('tag:') === 0) {
          var tagName = name.substring(4);
          for (var i = 0; i < count; i++) results.push({ tag: tagName });
        } else {
          for (var i = 0; i < count; i++) results.push({ item: name });
        }
        return results;
      }

      // Object syntax:
      // { item: 'mod:item', count: 4 }
      // { tag: 'mod:tag', count: 4 }
      // { itemObj: Item.of(...).weakNBT(), count: 4 }
      if (typeof entry === 'object') {
        var c = 1;
        if (typeof entry.count === 'number') c = entry.count;

        if (entry.item) {
          for (var j = 0; j < c; j++) results.push({ item: entry.item });
          return results;
        }
        if (entry.tag) {
          for (var j2 = 0; j2 < c; j2++) results.push({ tag: entry.tag });
          return results;
        }
        if (entry.itemObj) {
          for (var j3 = 0; j3 < c; j3++) results.push(entry.itemObj);
          return results;
        }

        // If it's already an Item.of(...).weakNBT() (no count provided), just return it once
        return [entry];
      }

      return results;
    }

    var ingredients = [];
    ingredients.push({ item: base });

    for (var e = 0; e < essences; e++) {
      ingredients.push({ item: 'mysticalagriculture:tertium_essence' });
    }

    for (var m = 0; m < materials.length; m++) {
      var parts = expandMaterial(materials[m]);
      for (var p = 0; p < parts.length; p++) ingredients.push(parts[p]);
    }

    event.custom({
      type: 'botania:runic_altar',
      ingredients: ingredients,
      mana: mana,
      output: { item: output },
    });
  }

  // --- compact seed definitions using shorthand "*4" ---
  var seeds = [
    {
      out: 'mysticalagriculture:boron_seeds',
      mats: ['nuclearcraft:boron_ingot*4'],
    },
    {
      out: 'mysticalagriculture:cognizant_dust_seeds',
      mats: ['mysticalagriculture:cognizant_dust*4'],
    },
    {
      out: 'mysticalagriculture:lithium_seeds',
      mats: ['nuclearcraft:lithium_ingot*4'],
    },
    { out: 'mysticalagriculture:iron_seeds', mats: ['minecraft:iron_ingot*4'] },
    {
      out: 'mysticalagriculture:copper_seeds',
      mats: ['minecraft:copper_ingot*4'],
    },
    {
      out: 'mysticalagriculture:nether_quartz_seeds',
      mats: ['minecraft:quartz*4'],
    },
    {
      out: 'mysticalagriculture:glowstone_seeds',
      mats: ['minecraft:glowstone*4'],
    },
    {
      out: 'mysticalagriculture:redstone_seeds',
      mats: ['minecraft:redstone_block*4'],
    },
    {
      out: 'mysticalagriculture:obsidian_seeds',
      mats: ['minecraft:obsidian*4'],
    },
    {
      out: 'mysticalagriculture:prismarine_seeds',
      mats: ['mysticalagriculture:prismarine_agglomeratio*4'],
    },
    { out: 'mysticalagriculture:tin_seeds', mats: ['thermal:tin_ingot*4'] },
    {
      out: 'mysticalagriculture:bronze_seeds',
      mats: ['thermal:bronze_ingot*4'],
    },
    {
      out: 'mysticalagriculture:zinc_seeds',
      mats: ['common_ore_library:zinc_ingot*4'],
    },
    {
      out: 'mysticalagriculture:brass_seeds',
      mats: ['common_ore_library:brass_ingot*4'],
    },
    {
      out: 'mysticalagriculture:silver_seeds',
      mats: ['thermal:silver_ingot*4'],
    },
    { out: 'mysticalagriculture:lead_seeds', mats: ['thermal:lead_ingot*4'] },
    {
      out: 'mysticalagriculture:certus_quartz_seeds',
      mats: ['ae2:quartz_block*4'],
    },
    {
      out: 'mysticalagriculture:conductive_alloy_seeds',
      mats: ['enderio:conductive_alloy_ingot*4'],
    },
    {
      out: 'mysticalagriculture:quartz_enriched_iron_seeds',
      mats: ['refinedstorage:quartz_enriched_iron*4'],
    },
    {
      out: 'mysticalagriculture:copper_alloy_seeds',
      mats: ['enderio:copper_alloy_ingot*4'],
    },
    {
      out: 'mysticalagriculture:redstone_alloy_seeds',
      mats: ['enderio:redstone_alloy_ingot*4'],
    },
    {
      out: 'mysticalagriculture:sky_stone_seeds',
      mats: ['ae2:sky_stone_block*4'],
    },
    {
      out: 'mysticalagriculture:graphite_seeds',
      mats: ['bigreactors:graphite_ingot*4'],
    },
    {
      out: 'mysticalagriculture:manasteel_seeds',
      mats: ['botania:manasteel_ingot*4'],
    },
    {
      out: 'mysticalagriculture:steeleaf_seeds',
      mats: ['twilightforest:steeleaf_ingot*4'],
    },
    {
      out: 'mysticalagriculture:ironwood_seeds',
      mats: ['twilightforest:ironwood_ingot*4'],
    },
    {
      out: 'mysticalagriculture:pig_iron_seeds',
      mats: ['tconstruct:pig_iron_ingot*4'],
    },
    {
      out: 'mysticalagriculture:slimesteel_seeds',
      mats: ['tconstruct:slimesteel_ingot*4'],
    },
    {
      out: 'mysticalagriculture:amethyst_bronze_seeds',
      mats: ['tconstruct:amethyst_bronze_ingot*4'],
    },
  ];

  for (var i = 0; i < seeds.length; i++) {
    runic(seeds[i].out, 'kubejs:tier3_crafting_seed', seeds[i].mats, 5000, 4);
  }

  runic(
    'mysticalagriculture:zombie_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:10.0d,Type:"mysticalagriculture:zombie"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:skeleton_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:10.0d,Type:"mysticalagriculture:skeleton"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:creeper_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:10.0d,Type:"mysticalagriculture:creeper"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:spider_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:10.0d,Type:"mysticalagriculture:spider"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:rabbit_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:6.0d,Type:"mysticalagriculture:rabbit"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:blizz_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:6.0d,Type:"mysticalagriculture:blizz"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:blitz_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:6.0d,Type:"mysticalagriculture:blitz"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );

  runic(
    'mysticalagriculture:basalz_seeds',
    'mysticalagriculture:soulium_seed_base',
    [
      {
        itemObj: Item.of(
          'mysticalagriculture:soul_jar',
          '{Souls:6.0d,Type:"mysticalagriculture:basalz"}'
        ).weakNBT(),
        count: 4,
      },
    ],
    5000,
    4
  );
});
