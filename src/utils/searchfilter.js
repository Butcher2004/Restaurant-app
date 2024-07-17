

export function searchfilter(list, name)
{

    const lowercasename = name.toLowerCase();
    const results = list.filter((rest) => rest["Restaurant Name"].toLowerCase().includes(lowercasename))
    return results;
}