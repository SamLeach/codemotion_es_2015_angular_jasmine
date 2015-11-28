describe('Search Controller', function() {

	var $location;
	var $scope;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$controller_, _$location_) {
		$scope = {};
		$location = _$location_;
		_$controller_('SearchController', { $scope: $scope, $location: _$location_ });
	}));

	it('should redirect to query results for non-empty query', function() {
		$scope.query = 'star wars';
		$scope.search();
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('should not redirect to query results for empty query', function() {
		$scope.query = '';
		$scope.search();
		expect($location.url()).toBe('');
	});
});