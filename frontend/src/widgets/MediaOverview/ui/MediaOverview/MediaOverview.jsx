import { Grid, Stack } from '@mui/material';

import MediaProductionCompaniesBlock from '../../../../shared/ui/MediaProductionCompaniesBlock';
import SeasonsAndEpisodesBlock from '../SeasonsAndEpisodesBlock';
import MediaCastAndCrewBlock from '../MediaCastAndCrewBlock';
import MediaDetailsBlock from '../MediaDetailsBlock';
import MediaRatingBlock from '../../../../shared/ui/MediaRatingBlock';
import useMediaAction from '../../../../shared/hooks/useMediaAction';
import MediaPlotBlock from '../MediaPlotBlock';

const MediaOverview = ({ mediaDataWithActions, mediaType }) => {
  const {
    id,
    name,
    title,
    overview,
    seasons,
    credits: { cast },
    poster_path: posterPath,
    first_air_date: airDate,
    vote_average: voteAverage,
    release_date: releaseDate,
    production_companies: companies,
  } = mediaDataWithActions;

  const actionMutation = useMediaAction('mediaActionData', id);

  const relevantReleaseDate = airDate || releaseDate || '0000-00-00';
  const relevantTitle = name || title;

  const extraMediaData = {
    releaseDate: relevantReleaseDate,
    title: relevantTitle,
    posterPath,
    voteAverage,
  };

  return (
    <Stack mt={14} gap={6}>
      <Grid container justifyContent="space-between">
        <Grid size={7.5}>
          <Stack gap={6}>
            <MediaPlotBlock overview={overview} />
            <MediaCastAndCrewBlock cast={cast} />
          </Stack>
        </Grid>

        <Grid size={4}>
          <Stack gap={6}>
            <MediaDetailsBlock mediaDataWithActions={mediaDataWithActions} />
            <MediaProductionCompaniesBlock companies={companies} />
            <MediaRatingBlock
              mediaId={id}
              actionMutation={actionMutation}
              extraMediaData={extraMediaData}
            />
          </Stack>
        </Grid>
      </Grid>

      {mediaType === 'tv' && <SeasonsAndEpisodesBlock seasons={seasons} />}
    </Stack>
  );
};

export default MediaOverview;
