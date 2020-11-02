pragma solidity 0.5.16;
import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract PBox is Initializable {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function initialize(uint256 newValue) public initializer {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
