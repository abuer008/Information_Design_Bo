import {Box, Stack, Typography} from "@mui/material";
import {IProject} from "src/types/project";
import Label from "src/components/label";

type Props = {
    project: IProject
}

export default function ProjectDetail({project}: Props) {

    const keywords = project.Keywords.split(',');

    const kode = project.KoDe !== 0;
    const id = project.ID !== 0;
    const rs = project.RS !== 0;

    return (
        <Box sx={{
            position: 'fixed',
            // top: 0,
            // right: 0,
            width: { md: '250px', lg: '450px'},
            height: '100vh',
            backgroundColor: 'background.default',
            borderLeft: 'solid grey',
            px: 2,
            pt: 2,
        }}>
            <Stack spacing={2}>
                <Typography variant='h2'>{project.Projektname}</Typography>
                <Stack>
                    <Stack direction='row' spacing={1} alignItems='center'>
                <Typography variant='h4'>
                    {project.Category}
                </Typography>
                        {kode && <Label color='primary'>KoDe</Label>}
                        {id && <Label color='success'>ID</Label>}
                        {rs && <Label color='info'>RS</Label>}
                    </Stack>
                <Typography variant='subtitle2'>
                    {project.Jahr}
                </Typography>
                </Stack>
                <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
                    {keywords && keywords.map((word, index) => (<Label key={index}>{word}</Label>))}
                </Stack>
                <Typography paragraph>
                    {project.TextBeschreibung}
                </Typography>
            </Stack>
        </Box>
    )
}