pragma solidity ^0.4.17;

contract Project
{
    string public Candidate;
    int private NumOfLikes;
    int private NumOfDislikes;

    constructor (string CandidateName) public
    {
        Candidate = CandidateName;
    }

    function  Like () public
    {
        NumOfLikes++;
    }

    function  Dislike () public
    {
        NumOfDislikes++;
    }

    function Result ()  public view returns (int , int )
    {
        return (NumOfLikes, NumOfDislikes);
    }
}