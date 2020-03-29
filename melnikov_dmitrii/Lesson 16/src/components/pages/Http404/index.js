import React from 'react';

export const Http404 = ({ location }) =>
    <div>
        {`Произошла ошибка по запросу адреса ${location.pathname}`}
    </div>