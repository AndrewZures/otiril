jest.dontMock(`${src}/fetchCurrentUser`);

describe('fetchCurrentUser', function(){

  it('calls ajax stuff', function(){
    var $ = require('jquery');
    var fetchCurrentUser = require(`${src}/fetchCurrentUser`);

    function dummyCallback() {}

    fetchCurrentUser(dummyCallback);

    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'http://example.com/currentUser',
      success: jasmine.any(Function)
    });
  });
});
