import _ from 'lodash';

export function paginate(items, pgNum, pgSize)
{
    const startIndex = (pgNum-1)*pgSize;
    return _(items).slice(startIndex).take(pgSize).value();
}