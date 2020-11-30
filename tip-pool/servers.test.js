describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Chris';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Chris');
  });

  //add test for updateServerTable
  it('should update table with one row per server on updateServerTable()', function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update serverTable with updateServerTable()',function(){
    submitServerInfo();
    updateServerTable();

    let TdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(TdList.length).toEqual(1);
    expect(TdList[0].innerHTML).toContain('Chris');
    expect(TdList[1].innerHTML).toContain('0');
  });

  it('should append a new button to tr'), function(){
    let tr = document.createElement('tr');

    appendDeleteBtn(tr);

    expect(tr.children.length).toEqual(1);
    expect(tr.firstChild.innerHTML).toEqual('X');
  }

  afterEach(function() {

    serverNameInput.value = '';
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    
  });
});


//update server table