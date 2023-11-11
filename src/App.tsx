import { AddReaction } from "@mui/icons-material";
import {
	Accordion,
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
				<AccordionSummary className="block">
					<div className="block overflow-hidden truncate">
						<Typography className="truncate">
							fkdlasjlkfasdjfsklajflkdsjfksadjfiosdajiofjsdaiofjsdiofjidosafjiosdjfaiosjojdiosajifojdiofdsiofjdsofjsdiofjiodsjfidsjfaisojiojfdisoafiodsjiofjdsaiofjdisofjiosdjfos
						</Typography>
					</div>
				</AccordionSummary>
			</Accordion>

			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={options}
				sx={{ width: 300 }}
				renderInput={(params) => (
					<TextField color="success" {...params} label="Movie" />
				)}
			/>
		</div>
	);
}

export default App;
