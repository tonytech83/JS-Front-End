function parseStudentsInformation(data) {
  let courses = {};

  function addCourse(line) {
    let [courseName, courseCapacity] = line.split(': ');
    if (!courses.hasOwnProperty(courseName)) {
      courses[courseName] = {
        students: [],
        capacityLeft: 0,
      }
    }
    courses[courseName].capacityLeft += Number(courseCapacity)
  }

  function addStudentToCourse(line) {
    let pattern = /^([^\[]+)\[(\d+)\].*?([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\sjoins\s(.+)$/;
    const match = line.match(pattern);

    if (match) {
      const studentName = match[1];
      const creditsCount = match[2];
      const email = match[3];
      const courseName = match[4];
      if (courses.hasOwnProperty(courseName) && courses[courseName].capacityLeft > 0) {
        courses[courseName].capacityLeft -= 1
        courses[courseName].students.push([studentName, creditsCount, email])
      }
    }
  }

  function output() {
    Object.entries(courses)
      .sort((a, b) => b[1].students.length - a[1].students.length)
      .forEach(course => {
        console.log(`${course[0]}: ${course[1].capacityLeft} places left`)
        course[1].students
          .sort((a, b) => b[1] - a[1])
          .forEach(student => console.log(`--- ${student[1]}: ${student[0]}, ${student[2]}`))
      })
  }

  data
    .forEach(line => {
      if (line.includes(': ')) {
        addCourse(line);
      } else if (line.includes('@')) {
        addStudentToCourse(line);
      }
    })

  output();

}

parseStudentsInformation(
  [
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
  ]
);

parseStudentsInformation(
  [
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
  ]
);