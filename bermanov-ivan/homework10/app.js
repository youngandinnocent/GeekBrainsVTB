const yargs = require('yargs');
const server = require('./server');

yargs.command({
    command: 'runServer',
    describe: 'Run server',
    builder: {
        port: {
            type: 'number',
            demandOption: false,
            describe: 'Port'
        },
    },
    handler({ port }) {
        const currentPort = port || 4000;
        server.server.listen(currentPort, () => {
            console.log(`Server is running on ${currentPort} port...To exit press Ctrl + C`);
        });
    }
});

yargs.parse();
