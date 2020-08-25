const planServer = (req, res) => {
  try {
    if (
      !req.body ||
      !req.body.virtualMachines ||
      !req.body.serverType ||
      !req.body.virtualMachines.length
    ) {
      return res.status(422).json({ message: 'Oops invalid Input' });
    }
    const { virtualMachines , serverType } = req.body;
    const total = [];
    for (let i = 0, size = virtualMachines.length; i < size; i++) {
      if (
        virtualMachines[i]['CPU'] > serverType['CPU'] ||
        virtualMachines[i]['RAM'] > serverType['RAM'] ||
        virtualMachines[i]['HDD'] > serverType['HDD']
      ) {
        continue;
      } else if (
        virtualMachines[i]['CPU'] <= serverType['CPU'] &&
        virtualMachines[i]['RAM'] <= serverType['RAM'] &&
        virtualMachines[i]['HDD'] <= serverType['HDD']
      ) {
        total.push(virtualMachines[i]);
        serverType['CPU'] -= virtualMachines[i]['CPU'];
        serverType['RAM'] -= virtualMachines[i]['RAM'];
        serverType['HDD'] -= virtualMachines[i]['HDD'];
      }
    }

    return res.status(200).json({ message:'operation successful',  data: total.length });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = planServer;
