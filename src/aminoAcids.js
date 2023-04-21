export const aminoAcids= [
    {
        id:1,
        name: 'Alanine',
        symbol: 'Ala',
        IUPAC: '2-aminopropanoic acid',
        formula:'C3H7NO2',
        image: '/images/alanine.jpeg',
        group:'aliphatic'


},
{
    id:2,
    name: 'Arginine',
    symbol: 'Arg',
    IUPAC: '2-Amino-5-guanidinopentanoic acid',
    formula:'C6H14N4O2',
    group:'+ charged, basic',
    image:process.env.PUBLIC_URL + '/images/arginine.jpeg'
},
{
    id:3,
    name: 'Asparagine',
    symbol:'Asn',
    IUPAC: '2-Amino-3-carbamoylpropanoic acid',
    formula:'C4H8N2O3',
    group:'amidic',
    image:process.env.PUBLIC_URL + '/images/asparagine.jpeg'
},
{
    id:4,
    name: 'Aspartic acid',
    symbol:'Asp',
    IUPAC: '2-Aminobutanedioic acid',
    formula:'C4H7NO4',
    group:'- charged, acidic',
    image:process.env.PUBLIC_URL + '/images/asparticacid.jpeg'
},
{
    id:5,
    name: 'Cysteine',
    symbol:'Cys',
    IUPAC:'2-Amino-3-sulfhydrylpropanoic acid',
    formula:'C3H7NO2S',
    group:'Sulfur containing',
    image:process.env.PUBLIC_URL + '/images/cysteine.jpeg'
},
{
    id:6,
    name: 'Glutamic acid',
    symbol:'Glu',
    IUPAC: '2-Aminopentanedioic acid',
    formula:'C5H9NO4',
    group:'- charged, acidic',
    image:process.env.PUBLIC_URL + '/images/glutamicacid.jpeg'
},
{
    id:7,
    name: 'Glutamine',
    symbol:'Gln',
    IUPAC: '2,5-Diamino-5-oxopentanoic acid',
    formula:'C5H10N2O3',
    group:'amidic',
    image:process.env.PUBLIC_URL + '/images/glutamine.jpeg'
},
{
    id:8,
    name: 'Glycine',
    symbol:'Gly',
    IUPAC:'2-Aminoethanoic acid',
    formula:'C2H5NO2',
    group:'aliphatic',
    image:process.env.PUBLIC_URL + '/images/glycine.jpeg'
},
{
    id:9,
    name: 'Histidine',
    symbol:'His',
    IUPAC:'2-Amino-3-(1H-imidazol-4-yl)propanoic acid',
    formula:'C6H9N3O2',
    group:'+ charged, basic, essential',
    image:process.env.PUBLIC_URL + '/images/histidine.jpeg'
},
{
    id:10,
    name: 'Isoleucine',
    symbol:'Ile',
    IUPAC:'(2S,3S)-2-amino-3-methylpentanoic acid',
    formula:'C6H13NO2',
    group:'aliphatic, essential',
    image:process.env.PUBLIC_URL + '/images/isoleucine.jpeg'
},
{
    id:11,
    name: 'Leucine',
    symbol:'Leu',
    IUPAC:'2-Amino-4-methylpentanoic acid',
    formula:'C6H13NO2',
    group:'aliphatic, essential',
    image:process.env.PUBLIC_URL + '/images/leucine.jpeg'
},
{
    id:12,
    name: 'Lysine',
    symbol:'Lys',
    IUPAC:'(2S)-2,6-Diaminohexanoic acid (L-lysine)',
    formula:'C6H14N2O2',
    group:' + charged , basic, essential',
    image:process.env.PUBLIC_URL + '/images/lysine.jpeg'
},
{
    id:13,
    name: 'Methionine',
    symbol:'Met',
    IUPAC:'2-amino-4-(methylthio)butanoic acid',
    formula:'C5H11NO2S',
    group:'Sulfur containing, essential',
    image:process.env.PUBLIC_URL + '/images/methionine.jpeg'
},
{
    id:14,
    name: 'Phenylalanine',
    symbol:'Phe',
    IUPAC:'(S)-2-Amino-3-phenylpropanoic acid',
    formula:'C9H11NO2',
    group:'aromatic, essential',
    image:process.env.PUBLIC_URL + '/images/phenylalanine.jpeg'
},
{
    id:15,
    name: 'Proline',
    symbol:'Pro',
    IUPAC:'Pyrrolidine-2-carboxylic acid',
    formula:'C5H9NO2',
    group:'aliphatic',
    image:process.env.PUBLIC_URL + '/images/proline.jpeg'
},
{
    id:16,
    name:'Serine',
    symbol:'Ser',
    IUPAC:'2-Amino-3-hydroxypropanoic acid',
    formula:'C3H7NO3',
    group:'hydroxylic',
    image:process.env.PUBLIC_URL + '/images/serine.jpeg'
},
{
    id:17,
    name: 'Threonine',
    symbol: 'Thr',
    IUPAC:'2-Amino-3-hydroxybutanoic acid',
    formula:'C4H9NO3',
    group:'hydroxylic, essential',
    image:process.env.PUBLIC_URL + '/images/threonine.jpeg'
},
{
    id:18,
    name:'Tryptophan',
    symbol:'Trp',
    IUPAC:'(2S)-2-amino-3-(1H-indol-3-yl)propanoic acid',
    formula:'C11H12N2O2',
    group:'aromatic, essential',
    image:process.env.PUBLIC_URL + '/images/tryptophan.jpeg'
},
{
    id:19,
    name: 'Tyrosine',
    symbol: 'Tyr',
    IUPAC:'L-2-Amino-3-(4-hydroxyphenyl)propanoic acid Identifiers',
    formula:'C3H7NO2',
    group:'aromatic',
    image:process.env.PUBLIC_URL + '/images/tyrosine.jpeg'
},
{
    id:20,
    name: 'Valine',
    symbol: 'Val',
    IUPAC:'2-Amino-3-methylbutanoic acid',
     formula:'C5H11NO2',
    group:'aliphatic, essential',
    image:process.env.PUBLIC_URL + '/images/valine.jpeg'
},
{
    id:21,
    name: 'Selenocysteine',
    symbol:'Sec',
    IUPAC: '2-Amino-3-selanylpropanoic acid',
    formula:'C3H7NO2Se',
    group:' Selenium containing',
    image:process.env.PUBLIC_URL + '/images/selenocysteine.jpeg'
},
{
    id:22,
    name: 'Pyrrolysine',
    symbol: 'Pyl',
    IUPAC:'(2S)-2-amino-6-{[(2R,3R)-3-methyl-3,4-dihydro-2H-pyrrole-2-carbonyl]-amino}-hexanoic acid',
    formula:'C12H21N3O3',
    group:'+ charged',
    image:process.env.PUBLIC_URL + 'images/pyrrolysine.jpeg'
}
];



