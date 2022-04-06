import _ from 'lodash'

export class GoogleParserLocation {
  static getAll() {
    return locations
  }

  static getCountries() {
    return locations.filter((loc) => loc.targetType === 'Country')
  }
}

// Criteria ID,Name,Canonical Name,Parent ID,Country Code,Target Type,Status
const locations = [
  {
    id: 2004,
    parentId: null,
    countryCode: 'AF',
    name: 'Afghanistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2008,
    parentId: null,
    countryCode: 'AL',
    name: 'Albania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2010,
    parentId: null,
    countryCode: 'AQ',
    name: 'Antarctica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2012,
    parentId: null,
    countryCode: 'DZ',
    name: 'Algeria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2016,
    parentId: null,
    countryCode: 'AS',
    name: 'American Samoa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2020,
    parentId: null,
    countryCode: 'AD',
    name: 'Andorra',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2024,
    parentId: null,
    countryCode: 'AO',
    name: 'Angola',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2028,
    parentId: null,
    countryCode: 'AG',
    name: 'Antigua and Barbuda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2031,
    parentId: null,
    countryCode: 'AZ',
    name: 'Azerbaijan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2032,
    parentId: null,
    countryCode: 'AR',
    name: 'Argentina',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2036,
    parentId: null,
    countryCode: 'AU',
    name: 'Australia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2040,
    parentId: null,
    countryCode: 'AT',
    name: 'Austria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2044,
    parentId: null,
    countryCode: 'BS',
    name: 'The Bahamas',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2048,
    parentId: null,
    countryCode: 'BH',
    name: 'Bahrain',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2050,
    parentId: null,
    countryCode: 'BD',
    name: 'Bangladesh',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2051,
    parentId: null,
    countryCode: 'AM',
    name: 'Armenia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2052,
    parentId: null,
    countryCode: 'BB',
    name: 'Barbados',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2056,
    parentId: null,
    countryCode: 'BE',
    name: 'Belgium',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2064,
    parentId: null,
    countryCode: 'BT',
    name: 'Bhutan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2068,
    parentId: null,
    countryCode: 'BO',
    name: 'Bolivia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2070,
    parentId: null,
    countryCode: 'BA',
    name: 'Bosnia and Herzegovina',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2072,
    parentId: null,
    countryCode: 'BW',
    name: 'Botswana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2076,
    parentId: null,
    countryCode: 'BR',
    name: 'Brazil',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2084,
    parentId: null,
    countryCode: 'BZ',
    name: 'Belize',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2090,
    parentId: null,
    countryCode: 'SB',
    name: 'Solomon Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2096,
    parentId: null,
    countryCode: 'BN',
    name: 'Brunei',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2100,
    parentId: null,
    countryCode: 'BG',
    name: 'Bulgaria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2104,
    parentId: null,
    countryCode: 'MM',
    name: 'Myanmar (Burma)',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2108,
    parentId: null,
    countryCode: 'BI',
    name: 'Burundi',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2112,
    parentId: null,
    countryCode: 'BY',
    name: 'Belarus',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2116,
    parentId: null,
    countryCode: 'KH',
    name: 'Cambodia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2120,
    parentId: null,
    countryCode: 'CM',
    name: 'Cameroon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2124,
    parentId: null,
    countryCode: 'CA',
    name: 'Canada',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2132,
    parentId: null,
    countryCode: 'CV',
    name: 'Cape Verde',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2140,
    parentId: null,
    countryCode: 'CF',
    name: 'Central African Republic',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2144,
    parentId: null,
    countryCode: 'LK',
    name: 'Sri Lanka',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2148,
    parentId: null,
    countryCode: 'TD',
    name: 'Chad',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2152,
    parentId: null,
    countryCode: 'CL',
    name: 'Chile',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2156,
    parentId: null,
    countryCode: 'CN',
    name: 'China',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2162,
    parentId: null,
    countryCode: 'CX',
    name: 'Christmas Island',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2166,
    parentId: null,
    countryCode: 'CC',
    name: 'Cocos (Keeling) Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2170,
    parentId: null,
    countryCode: 'CO',
    name: 'Colombia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2174,
    parentId: null,
    countryCode: 'KM',
    name: 'Comoros',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2178,
    parentId: null,
    countryCode: 'CG',
    name: 'Republic of the Congo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2180,
    parentId: null,
    countryCode: 'CD',
    name: 'Democratic Republic of the Congo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2184,
    parentId: null,
    countryCode: 'CK',
    name: 'Cook Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2188,
    parentId: null,
    countryCode: 'CR',
    name: 'Costa Rica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2191,
    parentId: null,
    countryCode: 'HR',
    name: 'Croatia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2196,
    parentId: null,
    countryCode: 'CY',
    name: 'Cyprus',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2203,
    parentId: null,
    countryCode: 'CZ',
    name: 'Czechia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2204,
    parentId: null,
    countryCode: 'BJ',
    name: 'Benin',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2208,
    parentId: null,
    countryCode: 'DK',
    name: 'Denmark',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2212,
    parentId: null,
    countryCode: 'DM',
    name: 'Dominica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2214,
    parentId: null,
    countryCode: 'DO',
    name: 'Dominican Republic',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2218,
    parentId: null,
    countryCode: 'EC',
    name: 'Ecuador',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2222,
    parentId: null,
    countryCode: 'SV',
    name: 'El Salvador',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2226,
    parentId: null,
    countryCode: 'GQ',
    name: 'Equatorial Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2231,
    parentId: null,
    countryCode: 'ET',
    name: 'Ethiopia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2232,
    parentId: null,
    countryCode: 'ER',
    name: 'Eritrea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2233,
    parentId: null,
    countryCode: 'EE',
    name: 'Estonia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2239,
    parentId: null,
    countryCode: 'GS',
    name: 'South Georgia and the South Sandwich Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2242,
    parentId: null,
    countryCode: 'FJ',
    name: 'Fiji',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2246,
    parentId: null,
    countryCode: 'FI',
    name: 'Finland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2250,
    parentId: null,
    countryCode: 'FR',
    name: 'France',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2258,
    parentId: null,
    countryCode: 'PF',
    name: 'French Polynesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2260,
    parentId: null,
    countryCode: 'TF',
    name: 'French Southern and Antarctic Lands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2262,
    parentId: null,
    countryCode: 'DJ',
    name: 'Djibouti',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2266,
    parentId: null,
    countryCode: 'GA',
    name: 'Gabon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2268,
    parentId: null,
    countryCode: 'GE',
    name: 'Georgia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2270,
    parentId: null,
    countryCode: 'GM',
    name: 'The Gambia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2276,
    parentId: null,
    countryCode: 'DE',
    name: 'Germany',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2288,
    parentId: null,
    countryCode: 'GH',
    name: 'Ghana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2296,
    parentId: null,
    countryCode: 'KI',
    name: 'Kiribati',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2300,
    parentId: null,
    countryCode: 'GR',
    name: 'Greece',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2308,
    parentId: null,
    countryCode: 'GD',
    name: 'Grenada',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2316,
    parentId: null,
    countryCode: 'GU',
    name: 'Guam',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2320,
    parentId: null,
    countryCode: 'GT',
    name: 'Guatemala',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2324,
    parentId: null,
    countryCode: 'GN',
    name: 'Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2328,
    parentId: null,
    countryCode: 'GY',
    name: 'Guyana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2332,
    parentId: null,
    countryCode: 'HT',
    name: 'Haiti',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2334,
    parentId: null,
    countryCode: 'HM',
    name: 'Heard Island and McDonald Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2336,
    parentId: null,
    countryCode: 'VA',
    name: 'Vatican City',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2340,
    parentId: null,
    countryCode: 'HN',
    name: 'Honduras',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2348,
    parentId: null,
    countryCode: 'HU',
    name: 'Hungary',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2352,
    parentId: null,
    countryCode: 'IS',
    name: 'Iceland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2356,
    parentId: null,
    countryCode: 'IN',
    name: 'India',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2360,
    parentId: null,
    countryCode: 'ID',
    name: 'Indonesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2368,
    parentId: null,
    countryCode: 'IQ',
    name: 'Iraq',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2372,
    parentId: null,
    countryCode: 'IE',
    name: 'Ireland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2376,
    parentId: null,
    countryCode: 'IL',
    name: 'Israel',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2380,
    parentId: null,
    countryCode: 'IT',
    name: 'Italy',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2384,
    parentId: null,
    countryCode: 'CI',
    name: "Cote d'Ivoire",
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2388,
    parentId: null,
    countryCode: 'JM',
    name: 'Jamaica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2392,
    parentId: null,
    countryCode: 'JP',
    name: 'Japan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2398,
    parentId: null,
    countryCode: 'KZ',
    name: 'Kazakhstan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2400,
    parentId: null,
    countryCode: 'JO',
    name: 'Jordan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2404,
    parentId: null,
    countryCode: 'KE',
    name: 'Kenya',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2410,
    parentId: null,
    countryCode: 'KR',
    name: 'South Korea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2414,
    parentId: null,
    countryCode: 'KW',
    name: 'Kuwait',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2417,
    parentId: null,
    countryCode: 'KG',
    name: 'Kyrgyzstan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2418,
    parentId: null,
    countryCode: 'LA',
    name: 'Laos',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2422,
    parentId: null,
    countryCode: 'LB',
    name: 'Lebanon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2426,
    parentId: null,
    countryCode: 'LS',
    name: 'Lesotho',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2428,
    parentId: null,
    countryCode: 'LV',
    name: 'Latvia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2430,
    parentId: null,
    countryCode: 'LR',
    name: 'Liberia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2434,
    parentId: null,
    countryCode: 'LY',
    name: 'Libya',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2438,
    parentId: null,
    countryCode: 'LI',
    name: 'Liechtenstein',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2440,
    parentId: null,
    countryCode: 'LT',
    name: 'Lithuania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2442,
    parentId: null,
    countryCode: 'LU',
    name: 'Luxembourg',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2450,
    parentId: null,
    countryCode: 'MG',
    name: 'Madagascar',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2454,
    parentId: null,
    countryCode: 'MW',
    name: 'Malawi',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2458,
    parentId: null,
    countryCode: 'MY',
    name: 'Malaysia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2462,
    parentId: null,
    countryCode: 'MV',
    name: 'Maldives',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2466,
    parentId: null,
    countryCode: 'ML',
    name: 'Mali',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2470,
    parentId: null,
    countryCode: 'MT',
    name: 'Malta',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2478,
    parentId: null,
    countryCode: 'MR',
    name: 'Mauritania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2480,
    parentId: null,
    countryCode: 'MU',
    name: 'Mauritius',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2484,
    parentId: null,
    countryCode: 'MX',
    name: 'Mexico',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2492,
    parentId: null,
    countryCode: 'MC',
    name: 'Monaco',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2496,
    parentId: null,
    countryCode: 'MN',
    name: 'Mongolia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2498,
    parentId: null,
    countryCode: 'MD',
    name: 'Moldova',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2499,
    parentId: null,
    countryCode: 'ME',
    name: 'Montenegro',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2504,
    parentId: null,
    countryCode: 'MA',
    name: 'Morocco',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2508,
    parentId: null,
    countryCode: 'MZ',
    name: 'Mozambique',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2512,
    parentId: null,
    countryCode: 'OM',
    name: 'Oman',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2516,
    parentId: null,
    countryCode: 'NA',
    name: 'Namibia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2520,
    parentId: null,
    countryCode: 'NR',
    name: 'Nauru',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2524,
    parentId: null,
    countryCode: 'NP',
    name: 'Nepal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2528,
    parentId: null,
    countryCode: 'NL',
    name: 'Netherlands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2531,
    parentId: null,
    countryCode: 'CW',
    name: 'Curacao',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2534,
    parentId: null,
    countryCode: 'SX',
    name: 'Sint Maarten',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2535,
    parentId: null,
    countryCode: 'BQ',
    name: 'Caribbean Netherlands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2540,
    parentId: null,
    countryCode: 'NC',
    name: 'New Caledonia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2548,
    parentId: null,
    countryCode: 'VU',
    name: 'Vanuatu',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2554,
    parentId: null,
    countryCode: 'NZ',
    name: 'New Zealand',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2558,
    parentId: null,
    countryCode: 'NI',
    name: 'Nicaragua',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2562,
    parentId: null,
    countryCode: 'NE',
    name: 'Niger',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2566,
    parentId: null,
    countryCode: 'NG',
    name: 'Nigeria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2570,
    parentId: null,
    countryCode: 'NU',
    name: 'Niue',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2574,
    parentId: null,
    countryCode: 'NF',
    name: 'Norfolk Island',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2578,
    parentId: null,
    countryCode: 'NO',
    name: 'Norway',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2580,
    parentId: null,
    countryCode: 'MP',
    name: 'Northern Mariana Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2581,
    parentId: null,
    countryCode: 'UM',
    name: 'United States Minor Outlying Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2583,
    parentId: null,
    countryCode: 'FM',
    name: 'Federated States of Micronesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2584,
    parentId: null,
    countryCode: 'MH',
    name: 'Marshall Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2585,
    parentId: null,
    countryCode: 'PW',
    name: 'Palau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2586,
    parentId: null,
    countryCode: 'PK',
    name: 'Pakistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2591,
    parentId: null,
    countryCode: 'PA',
    name: 'Panama',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2598,
    parentId: null,
    countryCode: 'PG',
    name: 'Papua New Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2600,
    parentId: null,
    countryCode: 'PY',
    name: 'Paraguay',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2604,
    parentId: null,
    countryCode: 'PE',
    name: 'Peru',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2608,
    parentId: null,
    countryCode: 'PH',
    name: 'Philippines',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2612,
    parentId: null,
    countryCode: 'PN',
    name: 'Pitcairn Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2616,
    parentId: null,
    countryCode: 'PL',
    name: 'Poland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2620,
    parentId: null,
    countryCode: 'PT',
    name: 'Portugal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2624,
    parentId: null,
    countryCode: 'GW',
    name: 'Guinea-Bissau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2626,
    parentId: null,
    countryCode: 'TL',
    name: 'Timor-Leste',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2634,
    parentId: null,
    countryCode: 'QA',
    name: 'Qatar',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2642,
    parentId: null,
    countryCode: 'RO',
    name: 'Romania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2643,
    parentId: null,
    countryCode: 'RU',
    name: 'Russia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2646,
    parentId: null,
    countryCode: 'RW',
    name: 'Rwanda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2654,
    parentId: null,
    countryCode: 'SH',
    name: '"Saint Helena',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2659,
    parentId: null,
    countryCode: 'KN',
    name: 'Saint Kitts and Nevis',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2662,
    parentId: null,
    countryCode: 'LC',
    name: 'Saint Lucia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2666,
    parentId: null,
    countryCode: 'PM',
    name: 'Saint Pierre and Miquelon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2670,
    parentId: null,
    countryCode: 'VC',
    name: 'Saint Vincent and the Grenadines',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2674,
    parentId: null,
    countryCode: 'SM',
    name: 'San Marino',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2678,
    parentId: null,
    countryCode: 'ST',
    name: 'Sao Tome and Principe',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2682,
    parentId: null,
    countryCode: 'SA',
    name: 'Saudi Arabia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2686,
    parentId: null,
    countryCode: 'SN',
    name: 'Senegal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2688,
    parentId: null,
    countryCode: 'RS',
    name: 'Serbia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2690,
    parentId: null,
    countryCode: 'SC',
    name: 'Seychelles',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2694,
    parentId: null,
    countryCode: 'SL',
    name: 'Sierra Leone',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2702,
    parentId: null,
    countryCode: 'SG',
    name: 'Singapore',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2703,
    parentId: null,
    countryCode: 'SK',
    name: 'Slovakia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2704,
    parentId: null,
    countryCode: 'VN',
    name: 'Vietnam',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2705,
    parentId: null,
    countryCode: 'SI',
    name: 'Slovenia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2706,
    parentId: null,
    countryCode: 'SO',
    name: 'Somalia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2710,
    parentId: null,
    countryCode: 'ZA',
    name: 'South Africa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2716,
    parentId: null,
    countryCode: 'ZW',
    name: 'Zimbabwe',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2724,
    parentId: null,
    countryCode: 'ES',
    name: 'Spain',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2740,
    parentId: null,
    countryCode: 'SR',
    name: 'Suriname',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2748,
    parentId: null,
    countryCode: 'SZ',
    name: 'Swaziland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2752,
    parentId: null,
    countryCode: 'SE',
    name: 'Sweden',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2756,
    parentId: null,
    countryCode: 'CH',
    name: 'Switzerland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2762,
    parentId: null,
    countryCode: 'TJ',
    name: 'Tajikistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2764,
    parentId: null,
    countryCode: 'TH',
    name: 'Thailand',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2768,
    parentId: null,
    countryCode: 'TG',
    name: 'Togo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2772,
    parentId: null,
    countryCode: 'TK',
    name: 'Tokelau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2776,
    parentId: null,
    countryCode: 'TO',
    name: 'Tonga',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2780,
    parentId: null,
    countryCode: 'TT',
    name: 'Trinidad and Tobago',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2784,
    parentId: null,
    countryCode: 'AE',
    name: 'United Arab Emirates',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2788,
    parentId: null,
    countryCode: 'TN',
    name: 'Tunisia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2792,
    parentId: null,
    countryCode: 'TR',
    name: 'Turkey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2795,
    parentId: null,
    countryCode: 'TM',
    name: 'Turkmenistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2798,
    parentId: null,
    countryCode: 'TV',
    name: 'Tuvalu',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2800,
    parentId: null,
    countryCode: 'UG',
    name: 'Uganda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2804,
    parentId: null,
    countryCode: 'UA',
    name: 'Ukraine',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2807,
    parentId: null,
    countryCode: 'MK',
    name: 'Macedonia (FYROM)',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2818,
    parentId: null,
    countryCode: 'EG',
    name: 'Egypt',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2826,
    parentId: null,
    countryCode: 'GB',
    name: 'United Kingdom',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2831,
    parentId: null,
    countryCode: 'GG',
    name: 'Guernsey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2832,
    parentId: null,
    countryCode: 'JE',
    name: 'Jersey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2834,
    parentId: null,
    countryCode: 'TZ',
    name: 'Tanzania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2840,
    parentId: null,
    countryCode: 'US',
    name: 'United States',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2854,
    parentId: null,
    countryCode: 'BF',
    name: 'Burkina Faso',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2858,
    parentId: null,
    countryCode: 'UY',
    name: 'Uruguay',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2860,
    parentId: null,
    countryCode: 'UZ',
    name: 'Uzbekistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2862,
    parentId: null,
    countryCode: 'VE',
    name: 'Venezuela',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2876,
    parentId: null,
    countryCode: 'WF',
    name: 'Wallis and Futuna',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2882,
    parentId: null,
    countryCode: 'WS',
    name: 'Samoa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2887,
    parentId: null,
    countryCode: 'YE',
    name: 'Yemen',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2894,
    parentId: null,
    countryCode: 'ZM',
    name: 'Zambia',
    status: 'Active',
    targetType: 'Country'
  }
]
