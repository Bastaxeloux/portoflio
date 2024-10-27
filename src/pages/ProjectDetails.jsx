import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetJPEG from './ProjetJPEG';
import ProjetTIPE1 from './ProjetTIPE1';
import ProjetPACT from './ProjetPACT';
import ProjetTIPE2 from './ProjetTIPE2';

const components = {
    ProjetJPEG: ProjetJPEG,
    ProjetTIPE1: ProjetTIPE1,
    ProjetPACT: ProjetPACT,
    ProjetTIPE2: ProjetTIPE2,
};

const ProjectDetails = () => {
    const { id } = useParams();
    const Component = components[id];

    return Component ? <Component /> : <div>Project not found. Id = {id} </div>;
};

export default ProjectDetails;
