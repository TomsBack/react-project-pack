import { AddReaction, ExpandMore } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Autocomplete,
	Button,
	TextField,
	Typography,
} from "@mui/material";

const options = ["fdskj", "fdsklfj"];

function App() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
			<Button variant="contained" startIcon={<AddReaction />}>
				Button
			</Button>
			<Accordion className="w-1/3" elevation={10}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					Expand Me
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Numquam quia repellendus maxime, magnam hic fuga et iure
						neque deserunt minima necessitatibus harum aperiam
						aspernatur accusamus dolorem esse vel amet? Itaque!
						Pariatur aperiam, fugit voluptas recusandae ipsa
						mollitia aliquid soluta architecto. Cum id dignissimos
						ab soluta voluptatibus ipsa labore totam? Quibusdam
						beatae architecto tempore cupiditate tenetur mollitia
						numquam sapiente, ullam minima. Rem cum fugiat repellat
						dolore minima similique dicta dolorum rerum, vel
						possimus quae. Magni eos repudiandae voluptates iusto
						recusandae aspernatur, nobis, placeat minima corporis ea
						quibusdam aliquid cum ipsam sunt! Tempore facere quae
						aut ex ad. Distinctio error necessitatibus aliquam amet
						praesentium eum autem dolores nihil, deleniti
						perspiciatis facere. Ut quis, quam est debitis adipisci
						nesciunt ullam id doloremque magni. Nisi doloremque quod
						consequuntur pariatur necessitatibus explicabo est
						delectus eius quae voluptatibus, nihil accusantium.
						Aspernatur ipsam quod reprehenderit aut pariatur sunt
						perferendis ducimus adipisci? Commodi dolores quasi
						repudiandae deleniti sit.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={options}
				sx={{ width: 300 }}
				renderInput={(params) => (
					<TextField {...params} label="Movie" />
				)}
			/>
		</div>
	);
}

export default App;
