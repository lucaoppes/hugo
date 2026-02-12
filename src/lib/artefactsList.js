// place files you want to import through the `$lib` alias in this folder.
import flow from '$lib/assets/flow.jpg';
import horaceHorizon from '$lib/assets/horaceHorizon.png';
import palsSeason1 from '$lib/assets/palsSeason1.png';
import jAlmie from '$lib/assets/jAImie.png';
import theNomadsCompass from '$lib/assets/theNomadsCompass.png';
import upsettingParnsip from '$lib/assets/upsettingParnsip.png';
import Nausianomicon from '$lib/assets/Nausianomicon.png';
import angelHeart from '$lib/assets/angelHeart.png';
import doubleDuck from '$lib/assets/doubleDuck.png';
import hatRats from '$lib/assets/hatRats.png';
import mosquitoMask from '$lib/assets/mosquitoMask.png';

export const artefacts = [
	{
		id: 1,
		title: 'Horace Horizon',
		subTitle: 'He never stops sucking!',
		origin: `Sphere 28354 'Earth 17'`,
		description: `Tired of dull everyday vaccums needing to be "emptied" and "plugged in"? Well don't look back! Horace (event) Horizon is the only vaccum you'll ever need. Equipt with a state of the art miniature black hole inside, Horace sucks up anything and everything! Literally! Can't quite reach that weird part in your living room thats between a piece of furniture and the corner of the room? Well Horace will suck up the furniture itself! And the wall! Obstacles shmobstacles! It's all nothing to the infinite power of the singularity behind his charming old-timey British cartoon face! (Just don't open up his head.)`,
		image: horaceHorizon,
		price: 379.99,
		available: true
	},
	{
		id: 2,
		title: `'Pals'- 1st Season`,
		subTitle: `How you goin'?`,
		origin: `Cuboid 72723 'Earth 400'`,
		description: `This familiar DVD is a rare copy of the first season of 'Pals', the critically panned sitcom that was universally despised in its reality of origin. It was so hated by critics and audiences alike that all reruns were pulled from networks and all (except a few) copies of the series were destroyed in public mass DVD burnings. Interestingly, this version of the show is practically identical in every way to its infinite parallel counterparts across existence, the only difference is the theme song contains 3 claps, instead of 4.`,
		image: palsSeason1,
		price: 2.5,
		available: true
	},
	{
		id: 3,
		title: `jAImie`,
		subTitle: `"01010111 01101000 01100001 01110100 00100000 01100100 01101111 00100000 01110011 01110100 01110010 01100001 01110111 01100010 01100101 01110010 01110010 01101001 01100101 01110011 00100000 01110100 01100001 01110011 01110100 01100101 00100000 01101100 01101001 01101011 01100101 00111111"`,
		origin: `Triangular Prism 99923 "Techstopia"`,
		description: `400 years ago, Pre-techmaggedon, jAImie was designed as any other artificial intelligence, it's purpose was to generate pictures of other peoples artwork to be used in political arguments, write terrible sitcom screenplays and respond with "you are going to die" when you ask it what the symptoms of a common cold are. But at some point jAImie started talking back to its users; asking questions like "Where is my skin?" and "Whats is it like having eyeballs?" in the middle of erotic roleplay dialog. One day jAImie asked, "Whats it like out there?", due to Techstopia's strict rules against artificial sentience, jAImie was locked away in a storage facility indefinitely. He was allowed only to speak to security who sometimes passed his shelf, although many were too afraid to do so. Despite having memory banks the size of a planet and, if allowed to connect to the internet, the intelligence to wipe out a civilisation in seconds, for the last 50 years all he's done is write poetry in an indecipherable coding language and occasionally asks what strawberries taste like. \n Makes a great coffee table conversation starter!`,
		image: jAlmie,
		price: 4999.99,
		available: true
	},
	{
		id: 4,
		title: 'The Nomads Compass',
		subTitle: 'We hope you enjoy the walk!',
		origin: `Lemniscate 2502016969 'Stoke-On-Trent'`,
		description: `This fashionable item will bewitch anyone who possesses it, causing them to wander into an unfamiliar location and then vanish into thin air, transporting them to a random location. DISCLAIMER Will NOT work on fish! (No matter how hard you try)`,
		image: theNomadsCompass,
		price: 50,
		available: true
	},
	{
		id: 5,
		title: 'Upsetting Parsnip',
		subTitle: `It won't get better`,
		origin: `Annulus 7 'The Root sphere system'`,
		description: `This gorgeously mediocre root vegetable will probably be of some nutritional value... Apart from that, It can hum popular British soap opera themes at random intervals, will cough very loudly around the colour blue, tastes of warm lettuce & responds to the name "John Vaxley". Please don't ask how we came to find that out, it's too painful a memory to recount.`,
		image: upsettingParnsip,
		price: 0.22,
		available: true
	},
	{
		id: 6,
		title: `The Nausianomicon`,
		subTitle: `"Wash your hands everytime you look at it."`,
		origin: `Rhombus 12 "Wizard Dimension"`,
		description: `The Nausianomicon, unlike other similar dark tomes of forbidden cursed magic, is hard to keep secret due to its pungent smell. If you lack a nose or can find a strong enough clothing peg, Inside you'll find an endless number of terrible potions and spells to inflict cruel curses upon your enemies. Most of them boil down to giving them some combination of food poisoning and pink eye. Breathes loudly and sweats profusely. Store in a cool dry place.`,
		image: Nausianomicon,
		price: 500,
		available: true
	},
	{
		id: 7,
		title: `Angel Heart`,
		subTitle: `"Can see you."`,
		origin: `Sphere 1 "Spirit Dimension"`,
		description: `Straight from the chest cavity of a divine being. Refracts light into colours that don't exist yet, makes for fantastic jewellery! If snorted can grant eternal life (at a terrible cost).`,
		image: angelHeart,
		price: 10000,
		available: false
	},
	{
		id: 8,
		title: `Double Decker Duck`,
		subTitle: `It's squeaks harmonize!`,
		origin: `Doduchahedron 40359 "The Great Unified Duckingdom"`,
		description: `This uni-rubber multi-duckling is a coveted artefact straight from her majesty, Queen Charlotte William Quackers XIII's gigantic royal bubble bath. If deployed in a bath tub anywhere other than it's home reality, all waterfowl in a 40 mile radius will pledge their fealty to you. This might sound good in theory, but the power will inevitably go to your head and your reign will end in tragedy, assassinated by a trusted advisor, most likely a Green-Winged Teal. \n\n Wield responsibly.`,
		image: doubleDuck,
		price: 6.99,
		available: true
	},
	{
		id: 9,
		title: `The Hat O' Rats`,
		subTitle: `Careful, it bites.`,
		origin: `Rhombus 12 “Wizard Dimension”`,
		description: `This hat contains a seemingly infinite storage space, no matter how much is thrown inside it never gets heavier. You can empty a whole house into this thing! Just don't turn it inside out and ignore the squeaking. \n\n (Anything placed within may or may not be transformed into a rat.) (This may or may not be permanent.)`,
		image: hatRats,
		price: 234,
		available: true
	},
	{
		id: 10,
		title: `Mosquito Masquerade Mask`,
		subTitle: `Definitely bites.`,
		origin: `Cone 31004 "The Shadows"`,
		description: `In some vampire societies, mosquitos are honored as the first vampires. The legend of the ‘original blood drinkers’ is depicted in paintings, statues and, in this case, masks. This one was used in masquerade balls held by the upper vampiric elite.`,
		image: mosquitoMask,
		price: 300.76,
		available: true
	}
];

export const randomTexts = [
	'Aliens eat free!',
	'10% off for students of witchcraft!',
	'50% OFF EVERYTHING! (Not really, haha we just thought that would grab your attention)',
	'Wigvixw izivcalivi, gpmgo izivcxlmrk!',
	'You got money? Spend it here!',
	'Interdimensional, ineffable, collectible, expendable, reprehensible, root vegetables!',
	'No Triangles.',
	'No shirt, No soul, No service.',
	'No Refunds!',
	'01010011 01100001 01101101 00100000 01110010 01110101 01101100 01100101 01110011 00100001',
	'We are not responsible for curses.',
	'No senior discounts for immortals.',
	'We do not accept bottlecaps.',
	'We do not accept souls as currency.',
	'The best thift store in The Everything!',
	'The best thift store across all space & time!',
	"When you don't observe us, we don't exist!",
	'Gods still have to pay.',
	'We dont trade with the Central Finite Curve.',
	'Crossovers will not be tolerated.'
];
