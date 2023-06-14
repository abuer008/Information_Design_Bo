import { m } from 'framer-motion';
import {useEffect, useState} from "react";
import {IProject, IProjectFiltersProps} from "src/types/project";
import TextCard from "src/components/textCard";
import {Box, Container, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {FilterCategory, ProjectDetail} from "../components";

type Props = {
    projects: IProject[];
}

const defaultFilterValue: IProjectFiltersProps = {
    filteredCategory: '',
    filteredTopic: '',
    filteredKeywords: []
}

export default function ProjectsView({projects}: Props) {

    const theme = useTheme();

    const getCategories = projects.map(project => project.Category);

    const categoriesList = Array.from(new Set(getCategories));

    const getTopics = projects.map(project => project.Topic);
    const topicList = Array.from(new Set(getTopics));

    const [filters, setFilters] = useState<IProjectFiltersProps>(defaultFilterValue);
    const [isCategory, setIsCategory] = useState(true);

    const [displayProject, setDisplayProject] = useState<IProject>();
    const [showDetail, setShowDetail] = useState(false);

    // useEffect(() => {
    //     onReset();
    // }, [filters])

    const handleChangeFilterList = (isCate: boolean) => {
        setIsCategory(isCate);
        onReset();
    }

    const handleChangeFilter = (word: string) => {
        if (isCategory) {
            setFilters({
                ...filters,
                filteredCategory: word
            })
        } else {
            setFilters({
                ...filters,
                filteredTopic: word
            })
        }

        console.log(filters)
    }

    const handleCardHover = (projectName: string | number) => {
        const hoveredProject = projects.filter((project, index) => project.Projektname === projectName)

        setDisplayProject(hoveredProject[0]);
        if (!showDetail) setShowDetail(true);
    }

    const handleCardLeave = () => {
        if (showDetail) setShowDetail(false);
    }


    const onReset = () => {
        setFilters(defaultFilterValue);
    }



    return (
        <m.div>
        <Stack direction='row'>
            <FilterCategory categories={isCategory ? categoriesList : topicList} onChangeFilterList={handleChangeFilterList} onChangeFilter={handleChangeFilter} />
        <Container sx={{
            py: 10,
        }}
                   onMouseLeave={handleCardLeave}
        >
            {projects.map((project, index) => <TextCard key={index} project={project} filterWord={filters} onCardHover={handleCardHover} />)}
        </Container>
            {(showDetail && displayProject) && <ProjectDetail project={displayProject} />}
            </Stack>
        </m.div>
    )
}