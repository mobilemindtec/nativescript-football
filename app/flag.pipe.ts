import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag'
})
export class FlagPipe implements PipeTransform {

  transform(value: any): any {
    const country = countries.find(country => country.name === value);

    return (country) ? country.code : '🏳';
  }
}

const countries: Country[] = [
//Substitute flags, as the countries don't have a unicode flags yet
  { name: 'England', code: '🇬🇧'},
  { name: 'Northern Ireland', code: '🇬🇧'},
  { name: 'Scotland', code: '🇬🇧'},
  { name: 'Wales', code: '🇬🇧'},

  { name: 'Albania', code: '🇦🇱'},
  { name: 'Algeria', code: '🇩🇿'},
  { name: 'Angola', code: '🇦🇴'},
  { name: 'Argentina', code: '🇦🇷'},
  { name: 'Armenia', code: '🇦🇲'},
  { name: 'Australia', code: '🇦🇺'},
  { name: 'Austria', code: '🇦🇹'},
  { name: 'Azerbaijan', code: '🇦🇿'},
  { name: 'Belgium', code: '🇧🇪'},
  { name: 'Benin', code: '🇧🇯'},
  { name: 'Bermuda', code: '🇧🇲'},
  { name: 'Bosnia-Herzegovina', code: '🇧🇦'},
  { name: 'Brazil', code: '🇧🇷'},
  { name: 'Bulgaria', code: '🇧🇬'},
  { name: 'Burkina Faso', code: '🇧🇫'},
  { name: 'Cameroon', code: '🇨🇲'},
  { name: 'Canada', code: '🇨🇦'},
  { name: 'Cape Verde', code: '🇨🇻'},
  { name: 'Chad', code: '🇹🇩'},
  { name: 'Chile', code: '🇨🇱'},
  { name: 'China', code: '🇨🇳'},
  { name: 'Colombia', code: '🇨🇴'},
  { name: 'Comoros', code: '🇰🇲'},
  { name: 'Congo', code: '🇨🇬'},
  { name: 'Congo DR', code: '🇨🇩'},
  { name: 'Costa Rica', code: '🇨🇷'},
  { name: 'Cote d\'Ivoire', code: '🇨🇮'},
  { name: 'Croatia', code: '🇭🇷'},
  { name: 'Curacao', code: '🇨🇼'},
  { name: 'Czech Republic', code: '🇨🇿'},
  { name: 'Denmark', code: '🇩🇰'},
  { name: 'Dominican Republic', code: '🇩🇴'},
  { name: 'Ecuador', code: '🇪🇨'},
  { name: 'Egypt', code: '🇪🇬'},
  { name: 'Estonia', code: '🇪🇪'},
  { name: 'France', code: '🇫🇷'},
  { name: 'French Guiana', code: '🇬🇫'},
  { name: 'Finland', code: '🇫🇮'},
  { name: 'Gabon', code: '🇬🇦'},
  { name: 'Georgia', code: '🇬🇪'},
  { name: 'Germany', code: '🇩🇪'},
  { name: 'Ghana', code: '🇬🇭'},
  { name: 'Greece', code: '🇬🇷'},
  { name: 'Guinea', code: '🇬🇳'},
  { name: 'Guinea-Bissau', code: '🇬🇼'},
  { name: 'Haiti', code: '🇭🇹'},
  { name: 'Hungary', code: '🇭🇺'},
  { name: 'Iceland', code: '🇮🇸'},
  { name: 'Ireland', code: '🇮🇪'},
  { name: 'India', code: '🇮🇳'},
  { name: 'Italy', code: '🇮🇹'},
  { name: 'Iran', code: '🇮🇷'},
  { name: 'Iraq', code: '🇮🇶'},
  { name: 'Israel', code: '🇮🇱'},
  { name: 'Jamaica', code: '🇯🇲'},
  { name: 'Japan', code: '🇯🇵'},
  { name: 'Jordan', code: '🇯🇴'},
  { name: 'Kenya', code: '🇰🇪'},
  { name: 'Korea, South', code: '🇰🇷'},
  { name: 'Kosovo', code: '🇽🇰'},
  { name: 'Latvia', code: '🇱🇻'},
  { name: 'Lithuania', code: '🇱🇹'},
  { name: 'Luxembourg', code: '🇱🇺'},
  { name: 'Madagascar', code: '🇲🇬'},
  { name: 'Mali', code: '🇲🇱'},
  { name: 'Malta', code: '🇲🇹'},
  { name: 'Martinique', code: '🇲🇶'},
  { name: 'Mexico', code: '🇲🇽'},
  { name: 'Moldova', code: '🇲🇩'},
  { name: 'Morocco', code: '🇲🇦'},
  { name: 'Montenegro', code: '🇲🇪'},
  { name: 'Mozambique', code: '🇲🇿'},
  { name: 'Netherlands', code: '🇳🇱'},
  { name: 'New Zealand', code: '🇳🇿'},
  { name: 'Niger', code: '🇳🇪'},
  { name: 'Nigeria', code: '🇳🇬'},
  { name: 'Norway', code: '🇳🇴'},
  { name: 'Oman', code: '🇴🇲'},
  { name: 'Palaästina', code: '🇵🇸'},
  { name: 'Paraguay', code: '🇵🇾'},
  { name: 'Peru', code: '🇵🇪'},
  { name: 'Poland', code: '🇵🇱'},
  { name: 'Puerto Rico', code: '🇵🇷'},
  { name: 'Portugal', code: '🇵🇹'},
  { name: 'Romania', code: '🇷🇴'},
  { name: 'Russia', code: '🇷🇺'},
  { name: 'Saudi Arabia', code: '🇸🇦'},
  { name: 'Serbia', code: '🇷🇸'},
  { name: 'Senegal', code: '🇸🇳'},
  { name: 'Slovakia', code: '🇸🇰'},
  { name: 'Slovenia', code: '🇸🇮'},
  { name: 'South Africa', code: '🇿🇦'},
  { name: 'Spain', code: '🇪🇸'},
  { name: 'Sweden', code: '🇸🇪'},
  { name: 'Switzerland', code: '🇨🇭'},
  { name: 'Togo', code: '🇹🇬'},
  { name: 'Tunisia', code: '🇹🇳'},
  { name: 'Turkey', code: '🇹🇷'},
  { name: 'Ukraine', code: '🇺🇦'},
  { name: 'Uruguay', code: '🇺🇾'},
  { name: 'United States', code: '🇺🇸'},
  { name: 'Venezuela', code: '🇻🇪'},
];

interface Country {
  name: string,
  code: string
}

/*
            {
                "name": "GB-ENG",
                "unicode": "🇬🇧",
                "hexcode": "1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",
                "codepoint": [
                    127988,
                    917607,
                    917602,
                    917605,
                    917614,
                    917607,
                    917631
                ],
                "shortname": "flag_gb-eng"
            },
            {
                "name": "GB-SCT",
                "unicode": "🇬🇧",
                "hexcode": "1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",
                "codepoint": [
                    127988,
                    917607,
                    917602,
                    917619,
                    917603,
                    917620,
                    917631
                ],
                "shortname": "flag_gb-sct"
            },
            {
                "name": "GB-WLS",
                "unicode": "🇬🇧",
                "hexcode": "1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",
                "codepoint": [
                    127988,
                    917607,
                    917602,
                    917623,
                    917612,
                    917619,
                    917631
                ],
                "shortname": "flag_gb-wls"
            },
*/
