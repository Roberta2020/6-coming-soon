import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from './components/progress-bar/renderProgressBar.js';

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

import { formValidation } from './components/form/formValidation.js';

renderProgressBar('.left', progressBarData);

renderSocials('footer > .long', socialsData);

formValidation();