export default {
  async fetch(request, env) {
    const response = await env.AI.run(
      'typesafe/jev',
      {
        state: {
          animal_sound: 'ワンワン',
          candidates: {
            dog: { name: '犬', sound_examples: ['ワンワン', 'キャンキャン'] },
            cat: { name: '猫', sound_examples: ['ニャー', 'ニャンニャン'] },
            cow: { name: '牛', sound_examples: ['モー'] },
            pig: { name: '豚', sound_examples: ['ブーブー'] },
            sheep: { name: '羊', sound_examples: ['メェー'] },
            horse: { name: '馬', sound_examples: ['ヒヒーン'] },
            rooster: { name: 'ニワトリ', sound_examples: ['コケコッコー'] },
            duck: { name: 'アヒル', sound_examples: ['ガーガー'] },
            frog: { name: 'カエル', sound_examples: ['ケロケロ'] },
            lion: { name: 'ライオン', sound_examples: ['ガオー'] },
          },
        },
        questions: {
          is_dog: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.dog`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_cat: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.cat`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_cow: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.cow`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_pig: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.pig`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_sheep: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.sheep`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_horse: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.horse`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_rooster: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.rooster`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_duck: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.duck`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_frog: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.frog`? Consider minor variations in Japanese onomatopoeia.',
          },
          is_lion: {
            type: 'noul',
            instructions:
              'Does `animal_sound` represent the sound made by `candidates.lion`? Consider minor variations in Japanese onomatopoeia.',
          },
        },
      },
    )

    return Response.json(response)
  },
}
