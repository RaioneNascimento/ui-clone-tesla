import React from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';

import UniqueOverlay from '../UniqueOverlay';
import theme from '../../styles/theme/default';

const Page: React.FC = () => {
  return (
    <>

      <ModelsWrapper>
        {[
          {
            id: "home",
            title: 'Clan Spartans',
            subtitle: 'A coragem alimenta as guerras, mas é o medo que as faz nascer',
          },
          { id: "history", title: 'Historia', subtitle: '' },
          { id: "goal", title: 'Objetivo', subtitle: '' },
          { id: "recrut", title: 'Recrutamento', subtitle: '' },
        ].map((modelName, index) => (
          <div key={index} style={{ background: theme.colors.background }}>
            <ModelSection
              key={index}
              className={`colored-${index + 1}`}
              modelName={modelName.title}
              overlayNode={<DefaultOverlayContent
                type={modelName.id}
                label={modelName.title}
                description={modelName.subtitle} />} />
          </div>
        ))}

      <UniqueOverlay />

      </ModelsWrapper>
    </>
  )
};

export default Page;
