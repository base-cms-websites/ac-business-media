const title = 'Tandem Roller Spec Guide';

module.exports = {
  title,
  description: `Search the industry’s first interactive ${title}!</p>
    <p><strong>In the market for a new roller?</strong> <em>Asphalt Contractor Magazine</em> has launched the industry’s first online and interactive <strong>${title}</strong>, custom-built for asphalt paving professionals.</p>
    <p>This database offers you the ability to search, sort, filter and download roller specs to help you make the right buying decision for your crew and compaction needs.`,
  bullets: [
    'Manufacturer',
    'Model Number',
    'Horsepower',
    'Drum Width',
    'Drum Diameter',
    'Operating Weight',
    'Amplitude',
    'Frequency',
    'Centrifugal Force',
  ],
  image: {
    src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/tandem-roller.jpg',
  },
  downloadLink: '/20973242',
  sheetSrc: 'https://spreadsheets.google.com/feeds/list/1BtttRyP7IT3IkpYZ7_paT3o_LJhtijyRBmODO0V2I9I/1/public/values?alt=json',
  columns: {
    manufacturer: {
      label: 'Manufacturer',
    },
    modelnumber: {
      label: 'Model No.',
    },
    enginehpnet: {
      label: 'Engine HP',
      type: 'number',
    },
    operatingweightlbs: {
      label: 'Operating Weight (lbs.)',
    },
    drumwidthin: {
      type: 'number',
      label: 'Drum Width (in.)',
    },
    drumdiameterin: {
      type: 'number',
      label: 'Drum Diameter (in.)',
    },
    amplitude: {
      label: 'Amplitude (in.)',
      range: ['lowamplitudein', 'highamplitudein'],
      type: 'number',
    },
    frequency: {
      label: 'Frequency (vpm)',
      range: ['lowfrequencyvpm', 'highfrequencyvpm'],
      type: 'number',
    },
    maxCentrifugalForce: {
      label: 'Max Centrifugal Force (lb.)',
      range: ['minimumcentrifugalforcelbs', 'maximumcentrifugalforcelbs'],
      type: 'number',
    },
  },
};
