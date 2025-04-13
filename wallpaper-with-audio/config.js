//testing video "https://media-hosting.imagekit.io/dc89d31f3cf44bcf/kda-evelynn-league-of-legends-moewalls-com.mp4?Expires=1839176226&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mWVA6-XcnEGhzA8GdwTqvV8yA5Q9x84GJJKgImBpEiBaO3hYj-Nrjk2hmnIGXdOm4yCyxoU-BCAsUK1AG9XsTB0vsWLpIrafGz5rfEdLfub4bVhTrVtTVaOcLKa0YR~9WDPGj2C8kv2jQnjztjtBfZyv33zEfZPSScp75Ty-y0StaI4LuIjgzKstBdJwGn2cF5mjAhrfmRWAaXE52XaUe~qJI9V1EFfFgd5363nBZubX5yqu6rjeSFeD4iZEwTndG7bPZC5q0GPgSN7jZvww7IHAXQ8ANZCpPt0vSc5tVkKZ~Wjyya1moJVW7YkvUz8GZI8pSyDeKgWsvU4En5bTfA__"
//testing audio "https://eta.vgmtreasurechest.com/soundtracks/angry-birds-bad-piggies/crqdrxjrsy/01.%20Bad%20Piggies%20Theme.mp3"
//note: testing sources may not be available

export const settings = {
  video: {
    url: "",
    autoplay: true,
    loop: true,
    muted: false,       // If true, video will be muted (regardless of audioURL)
    volume: 1.0         // Range: 0.0 to 1.0
  },
  audio: {
    enabled: false,     // Set to true to use separate audio file
    url: "",
    autoplay: true,
    loop: true,
    volume: 1.0         // Range: 0.0 to 1.0
  }
};
