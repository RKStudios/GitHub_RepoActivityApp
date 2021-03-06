import { Repository } from '../../models/repository/repository.interface';

const repoList: Repository[] = [
    {
        name: 'Test Repository',
        avatar: '',
        owner: 'Test Owner',
        description: 'Test Description',
        totalOpenIssues: 0,
        totalWatching: 0,
        totalStars: 0,
        totalForks: 0,
        totalCommits: 22,
        totalContributors: 1,
        commitRate: '-'
    },
    {
        name: 'Another Test Repository',
        avatar: 'test',
        owner: 'Another Test Owner',
        description: 'Another Test Description',
        totalOpenIssues: 12312312,
        totalWatching: 123123,
        totalStars: 123123123,
        totalForks: 12312312,
        totalCommits: 123123123,
        totalContributors: 12312312,
        commitRate: '0'
    }
];

export const REPOSITORY_LIST = repoList;