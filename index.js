exports.topics = [
  { name: 'apps',        description: 'manage apps' },
  { name: 'buildpacks',  description: 'manage the buildpacks for an app' },
  { name: 'config',      description: 'manage app config vars' },
  { name: 'domains',     description: 'manage the domains for an app' },
  { name: 'info',        hidden: true, },
  { name: 'maintenance', description: 'manage maintenance mode for an app' },
  { name: 'ps',          description: 'manage dynos (dynos, workers)' },
  { name: 'stack',       description: 'manage the stack of an app' },
];

exports.commands = [
  require('./commands/apps/info').apps,
  require('./commands/apps/info').root,
  require('./commands/buildpacks'),
  require('./commands/buildpacks/add.js'),
  require('./commands/buildpacks/clear.js'),
  require('./commands/buildpacks/remove.js'),
  require('./commands/buildpacks/set.js'),
  require('./commands/config'),
  require('./commands/config/get'),
  require('./commands/config/set').add,
  require('./commands/config/set').set,
  require('./commands/config/unset').remove,
  require('./commands/config/unset').unset,
  require('./commands/domains'),
  require('./commands/domains/add'),
  require('./commands/maintenance/index'),
  require('./commands/maintenance/off'),
  require('./commands/maintenance/on'),
  require('./commands/ps'),
  require('./commands/stack'),
  require('./commands/stack/set'),
];
