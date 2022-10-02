export const userInfos = {
    id: 23,
    userInfos: {
        firstName: "Jade",
        lastName: "Fontan",
        age: 35
    },
    todayScore: 0.88,
    keyData: {
        calorieCount: 2130,
        proteinCount: 105,
        carbohydrateCount: 210,
        lipidCount: 35
    }
}

export const userPerformance = {
    userId: 23,
    kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
    },
    data: [
        {
            value: 80,
            kind: 1
        },
        {
            value: 120,
            kind: 2
        },
        {
            value: 140,
            kind: 3
        },
        {
            value: 50,
            kind: 4
        },
        {
            value: 200,
            kind: 5
        },
        {
            value: 90,
            kind: 6
        }
    ]
}

export const userActivity = {
    userId: 23,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 60,
                calories: 240
            },
            {
                day: "2020-07-02",
                kilogram: 60,
                calories: 220
            },
            {
                day: "2020-07-03",
                kilogram: 61,
                calories: 280
            },
            {
                day: "2020-07-04",
                kilogram: 61,
                calories: 290
            },
            {
                day: "2020-07-05",
                kilogram: 60,
                calories: 160
            },
            {
                day: "2020-07-06",
                kilogram: 58,
                calories: 162
            },
            {
                day: "2020-07-07",
                kilogram: 56,
                calories: 390
            }
        ]
}

export const userAverageSessions = {
    userId: 23,
    sessions: [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 23
        },
        {
            day: 3,
            sessionLength: 45
        },
        {
            day: 4,
            sessionLength: 50
        },
        {
            day: 5,
            sessionLength: 0
        },
        {
            day: 6,
            sessionLength: 0
        },
        {
            day: 7,
            sessionLength: 60
        }
    ]
}
