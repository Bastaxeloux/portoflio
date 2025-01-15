import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetJPEG from './ProjetJPEG';
import ProjetTIPE1 from './ProjetTIPE1';
import ProjetPACT from './ProjetPACT';
import ProjetTIPE2 from './ProjetTIPE2';
import ProjetPACE from './ProjetPACE';
import Projet3DT from './Projet3DT'

const components = {
    ProjetJPEG: ProjetJPEG,
    ProjetTIPE1: ProjetTIPE1,
    ProjetPACT: ProjetPACT,
    ProjetTIPE2: ProjetTIPE2,
    ProjetPACE : ProjetPACE,
    Projet3DT : Projet3DT,
};

const ProjectDetails = () => {
    const { id } = useParams();
    const Component = components[id];

    return Component ? <Component /> : <div>Project not found. Id = {id} </div>;
};

export default ProjectDetails;
