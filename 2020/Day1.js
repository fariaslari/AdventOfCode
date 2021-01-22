let rawEntry = "1945\r\n2004\r\n1520\r\n1753\r\n1463\r\n1976\r\n1994\r\n1830\r\n1942\r\n1784\r\n1858\r\n1841\r\n1721\r\n1480\r\n1821\r\n1584\r\n978\r\n1530\r\n1278\r\n1827\r\n889\r\n1922\r\n1996\r\n1992\r\n1819\r\n1847\r\n2010\r\n2002\r\n210\r\n1924\r\n1482\r\n1451\r\n1867\r\n1364\r\n1578\r\n1623\r\n1117\r\n1594\r\n1476\r\n1879\r\n1797\r\n1952\r\n2005\r\n1734\r\n1898\r\n1880\r\n1330\r\n1854\r\n1813\r\n1926\r\n1686\r\n1286\r\n1808\r\n1876\r\n1366\r\n1995\r\n1632\r\n1699\r\n2001\r\n1365\r\n1343\r\n1979\r\n1868\r\n1815\r\n820\r\n1966\r\n1888\r\n1916\r\n1852\r\n1932\r\n1368\r\n1606\r\n1825\r\n1731\r\n1980\r\n1990\r\n1818\r\n1702\r\n1419\r\n1897\r\n1970\r\n1276\r\n1914\r\n1889\r\n1953\r\n1588\r\n1958\r\n1310\r\n1391\r\n1326\r\n1131\r\n1959\r\n1844\r\n1307\r\n1998\r\n1961\r\n1708\r\n1977\r\n1886\r\n1946\r\n1516\r\n1999\r\n1859\r\n1931\r\n1853\r\n1265\r\n1869\r\n1642\r\n1740\r\n1467\r\n1944\r\n1956\r\n1263\r\n1940\r\n1912\r\n1832\r\n1872\r\n1678\r\n1319\r\n1839\r\n1689\r\n1765\r\n1894\r\n1242\r\n1983\r\n1410\r\n1985\r\n1387\r\n1022\r\n1358\r\n860\r\n112\r\n1964\r\n1836\r\n1838\r\n1285\r\n1943\r\n1718\r\n1351\r\n760\r\n1925\r\n1842\r\n1921\r\n1967\r\n1822\r\n1978\r\n1837\r\n1378\r\n1618\r\n1266\r\n2003\r\n1972\r\n666\r\n1321\r\n1938\r\n1616\r\n1892\r\n831\r\n1865\r\n1314\r\n1571\r\n1806\r\n1225\r\n1882\r\n1454\r\n1257\r\n1381\r\n1284\r\n1907\r\n1950\r\n1887\r\n1492\r\n1934\r\n1709\r\n1315\r\n1574\r\n1794\r\n1576\r\n1883\r\n1864\r\n1981\r\n1317\r\n1397\r\n1325\r\n1620\r\n1895\r\n1485\r\n1828\r\n1803\r\n1715\r\n1374\r\n1251\r\n1460\r\n1863\r\n1581\r\n1499\r\n1933\r\n1982\r\n1809\r\n1812";
let nums = rawEntry.split("\r\n").map(m => Number(m)).sort((a,b) => a - b);

nums.some((num1, i1) => {
    return nums.slice(i1, nums.length).some(num2 => {
        if (num1 + num2 === 2020) {
            console.log("Find the two entries that sum to 2020; what do you get if you multiply them together? \nA:", num1 * num2);
            return true;
        }
        return false;
    })
})

nums.some((num1, i1) => {
    return nums.slice(i1, nums.length).some((num2, i2) => {
        return nums.slice(i2, nums.length).some(num3 => {
            if (num1 + num2 + num3 === 2020) {
                console.log("What is the product of the three entries that sum to 2020? \nA:", num1 * num2 * num3);
                return true;
            }
            return false;
        })
    })
})