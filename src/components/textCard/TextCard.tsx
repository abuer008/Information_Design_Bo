import { m } from 'framer-motion';
import {forwardRef} from "react";
import {Typography} from "@mui/material";
import {IProject, IProjectFiltersProps} from "src/types/project";

interface Props {
    project: IProject;
    filterWord: IProjectFiltersProps;
    onCardHover: (filter: string | number) => void;
}

const TextCard = forwardRef<HTMLParagraphElement, Props>(
    ({project, filterWord, onCardHover}, ref) => (
        <m.div>
            <Typography
                variant='h3'
                color={
                    (filterWord.filteredCategory === project.Category || filterWord.filteredTopic === project.Topic) ? 'red' : 'default'
                }
                onMouseEnter={() => {
                    if (filterWord.filteredCategory === project.Category || filterWord.filteredTopic === project.Topic) onCardHover(project.Projektname)
                }}
                sx={{
                width: 'auto',
                float: 'left',
            }}>
                {project.Projektname}
            </Typography>
        </m.div>
        )
);


export default TextCard;