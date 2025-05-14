import type { PageLoad } from './$types';


export const load: PageLoad = ({ params }) => {

  const { stage } = params;
  console.log('running page load with', stage)
  return { stage }
};