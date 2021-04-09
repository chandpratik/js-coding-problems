function isFcfs(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
    var order = servedOrders[i];

    if (
      takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
      order === takeOutOrders[takeOutOrdersIndex]
    ) {
      takeOutOrdersIndex++;
    } else if (
      dineInOrdersIndex <= dineInOrdersMaxIndex &&
      order === dineInOrders[dineInOrdersIndex]
    ) {
      dineInOrdersIndex++;
    } else {
      return false;
    }
  }

  if (
    dineInOrdersIndex !== dineInOrders.length ||
    takeOutOrdersIndex !== takeOutOrders.length
  ) {
    return false;
  }

  console.log('true');
}

isFcfs([1, 2, 4], [3, 6, 7], [3, 1, 2, 4, 6, 7]);
