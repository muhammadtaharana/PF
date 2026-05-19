import "./Skills.css";

import {
  FaPython,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaTerminal
} from "react-icons/fa";

import {
  SiKalilinux,
  SiOwasp,
  SiWireshark,
  SiGnubash,
  SiRedhat,
  SiBurpsuite,
  SiGooglecloud
} from "react-icons/si";

import {
  FaShieldHalved,
  FaBug,
  FaNetworkWired
} from "react-icons/fa6";

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-slider">
        <div className="skills-track">
          {/* First set */}
          <SiKalilinux title="Kali Linux" />
          <FaPython title="Python" />
          <SiBurpsuite title="Burp Suite" />
          <SiWireshark title="Wireshark" />
          <FaShieldHalved title="Security" />
          <SiOwasp title="OWASP" />
          <FaLinux title="Linux" />
          <SiRedhat title="Red Hat" />
          <FaBug title="Bug Bounty" />
          <FaNetworkWired title="Networking" />
          <SiGnubash title="Bash" />
          <FaDocker title="Docker" />
          <SiGooglecloud title="Google Cloud" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
          <FaTerminal title="Terminal" />

          {/* Duplicate for infinite scroll */}
          <SiKalilinux title="Kali Linux" />
          <FaPython title="Python" />
          <SiBurpsuite title="Burp Suite" />
          <SiWireshark title="Wireshark" />
          <FaShieldHalved title="Security" />
          <SiOwasp title="OWASP" />
          <FaLinux title="Linux" />
          <SiRedhat title="Red Hat" />
          <FaBug title="Bug Bounty" />
          <FaNetworkWired title="Networking" />
          <SiGnubash title="Bash" />
          <FaDocker title="Docker" />
          <SiGooglecloud title="Google Cloud" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
          <FaTerminal title="Terminal" />
        </div>
      </div>
    </div>
  );
}

export default Skills;