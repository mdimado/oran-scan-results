import React, { useState } from 'react';

const VulnerabilityDashboard = () => {
  const [activeTab, setActiveTab] = useState('grype');

  // Grype data - sorted by total vulnerabilities
  const gryperData = [
    { repo: 'nonrtric', critical: 2, high: 22, medium: 45, low: 5, total: 74 },
    { repo: 'nonrtric_plt_sme', critical: 6, high: 26, medium: 69, low: 4, total: 105 },
    { repo: 'oam_oam-controller', critical: 14, high: 51, medium: 50, low: 19, total: 134 },
    { repo: 'aiml-fw_aihp_ips_kserve-adapter', critical: 2, high: 11, medium: 18, low: 1, total: 32 },
    { repo: 'nonrtric_plt_ranpm', critical: 1, high: 9, medium: 15, low: 0, total: 25 },
    { repo: 'nonrtric_rapp_orufhrecovery', critical: 0, high: 12, medium: 26, low: 1, total: 39 },
    { repo: 'it_test', critical: 0, high: 16, medium: 48, low: 16, total: 80 },
    { repo: 'oam', critical: 0, high: 5, medium: 15, low: 0, total: 20 },
    { repo: 'aiml-fw_athp_tps_kubeflow-adapter', critical: 0, high: 4, medium: 9, low: 1, total: 14 },
    { repo: 'aiml-fw_athp_data-extraction', critical: 0, high: 4, medium: 3, low: 1, total: 8 },
    { repo: 'aiml-fw_apm_monitoring-server', critical: 1, high: 7, medium: 10, low: 0, total: 18 },
    { repo: 'nonrtric_rapp_ransliceassurance', critical: 0, high: 3, medium: 3, low: 0, total: 6 },
    { repo: 'nonrtric_rapp_healthcheck', critical: 0, high: 3, medium: 4, low: 0, total: 7 },
    { repo: 'ric-plt_conflictmgr', critical: 0, high: 2, medium: 6, low: 0, total: 8 },
    { repo: 'aiml-fw_awmf_tm', critical: 0, high: 2, medium: 3, low: 1, total: 6 },
    { repo: 'nonrtric_plt_dmaapmediatorproducer', critical: 0, high: 2, medium: 7, low: 0, total: 9 },
    { repo: 'ric-plt_ric-dep', critical: 0, high: 2, medium: 6, low: 0, total: 8 },
    { repo: 'smo_teiv', critical: 1, high: 2, medium: 1, low: 0, total: 4 },
    { repo: 'nonrtric_plt_rappmanager', critical: 0, high: 2, medium: 0, low: 0, total: 2 },
    { repo: 'nonrtric_plt_a1policymanagementservice', critical: 0, high: 1, medium: 0, low: 0, total: 1 },
    { repo: 'nonrtric_plt_dmaapadapter', critical: 0, high: 1, medium: 2, low: 1, total: 4 },
    { repo: 'nonrtric_plt_informationcoordinatorservice', critical: 0, high: 1, medium: 0, low: 0, total: 1 },
    { repo: 'smo_o2', critical: 0, high: 1, medium: 0, low: 0, total: 1 },
    { repo: 'sim_a1-interface', critical: 0, high: 1, medium: 0, low: 0, total: 1 },
    { repo: 'it_tifg', critical: 0, high: 0, medium: 2, low: 0, total: 2 },
    { repo: 'it_dep', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ci-management', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_aimlfw-dep', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ric-app_ad-cell', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_awmf_modelmgmtservice', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_apm_monitoring-agent', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'o-du_l2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_athp_sdk_model-storage', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'pti_rtp', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric_plt_rappcatalogue', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_apm_analysis-module', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'sim_ns3-o-ran-e2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric_plt_helmmanager', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'pti_o2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_athp_sdk_feature-store', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'doc', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric_plt_informationcoordinatorservice', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: '.github', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'portal_aiml-dashboard', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_athp_pipeline-components', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ric-plt_xapp-frame-rust', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'o-du_phy', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'sim_o1-ofhmp-interfaces', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw_aihp_tps_kserve-adapter', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'portal_nonrtric-controlpanel', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
  ].sort((a, b) => b.total - a.total);

  // Snyk data - sorted by total vulnerabilities
  const snykData = [
    { repo: 'nonrtric', critical: 10, high: 439, medium: 126, low: 18, total: 593 },
    { repo: 'nonrtric/plt/sme', critical: 0, high: 245, medium: 48, low: 4, total: 297 },
    { repo: 'aiml-fw/aihp/ips/kserve-adapter', critical: 0, high: 165, medium: 21, low: 0, total: 186 },
    { repo: 'ric-plt/ric-dep', critical: 0, high: 132, medium: 0, low: 0, total: 132 },
    { repo: 'oam/oam-controller', critical: 1, high: 7, medium: 94, low: 3, total: 105 },
    { repo: 'aiml-fw/awmf/tm', critical: 0, high: 18, medium: 48, low: 9, total: 75 },
    { repo: 'aiml-fw/apm/monitoring-server', critical: 0, high: 26, medium: 10, low: 0, total: 36 },
    { repo: 'nonrtric/plt/rappmanager', critical: 0, high: 14, medium: 2, low: 4, total: 20 },
    { repo: 'smo/teiv', critical: 0, high: 8, medium: 0, low: 3, total: 11 },
    { repo: 'nonrtric/plt/a1policymanagementservice', critical: 0, high: 9, medium: 0, low: 1, total: 10 },
    { repo: 'pti/o2', critical: 0, high: 0, medium: 8, low: 0, total: 8 },
    { repo: 'nonrtric/rapp/ransliceassurance', critical: 0, high: 2, medium: 4, low: 0, total: 6 },
    { repo: 'nonrtric/plt/informationcoordinatorservice', critical: 0, high: 6, medium: 0, low: 0, total: 6 },
    { repo: 'nonrtric/rapp/orufhrecovery', critical: 0, high: 3, medium: 2, low: 0, total: 5 },
    { repo: 'nonrtric/plt/ranpm', critical: 0, high: 3, medium: 0, low: 0, total: 3 },
    { repo: 'oam', critical: 0, high: 1, medium: 1, low: 0, total: 2 },
    { repo: 'nonrtric/plt/dmaapmediatorproducer', critical: 0, high: 1, medium: 1, low: 0, total: 2 },
    { repo: 'it/dep', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ci-management', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/aimlfw-dep', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ric-app/ad-cell', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/awmf/modelmgmtservice', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'it/test', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'pti/rtp', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'portal/aiml-dashboard', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/athp/pipeline-components', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'o-du/l2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/athp/sdk/model-storage', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/apm/monitoring-agent', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/apm/analysis-module', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/apm/influx-wrapper', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ric-plt/conflictmgr', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'sim/o1-ofhmp-interfaces', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'o-du/phy', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: '.github', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric/plt/dmaapadapter', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric/plt/rappcatalogue', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'ric-plt/xapp-frame-rust', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'sim/ns3-o-ran-e2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/aihp/tps/kserve-adapter', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'sim/a1-interface', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/athp/data-extraction', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/athp/sdk/feature-store', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'doc', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'it/tifg', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'aiml-fw/athp/tps/kubeflow-adapter', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'smo/o2', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric/plt/helmmanager', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'nonrtric/rapp/healthcheck', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
    { repo: 'portal/nonrtric-controlpanel', critical: 0, high: 0, medium: 0, low: 0, total: 0 },
  ].sort((a, b) => b.total - a.total);

  // Critical CVEs comparison
  const criticalCVEs = [
    { repo: 'nonrtric', snyk: 10, grype: 2 },
    { repo: 'nonrtric_plt_sme', snyk: 0, grype: 6 },
    { repo: 'oam_oam-controller', snyk: 1, grype: 14 },
    { repo: 'aiml-fw_aihp_ips_kserve-adapter', snyk: 0, grype: 2 },
    { repo: 'aiml-fw_apm_monitoring-server', snyk: 0, grype: 1 },
    { repo: 'nonrtric_plt_ranpm', snyk: 0, grype: 1 },
    { repo: 'smo_teiv', snyk: 0, grype: 1 },
  ].sort((a, b) => (b.snyk + b.grype) - (a.snyk + a.grype));

  // High CVEs comparison
  const highCVEs = [
    { repo: 'nonrtric', snyk: 439, grype: 22 },
    { repo: 'nonrtric_plt_sme', snyk: 245, grype: 26 },
    { repo: 'aiml-fw_aihp_ips_kserve-adapter', snyk: 165, grype: 11 },
    { repo: 'ric-plt_ric-dep', snyk: 132, grype: 2 },
    { repo: 'oam_oam-controller', snyk: 7, grype: 51 },
    { repo: 'aiml-fw_apm_monitoring-server', snyk: 26, grype: 7 },
    { repo: 'aiml-fw_awmf_tm', snyk: 18, grype: 2 },
    { repo: 'it_test', snyk: 0, grype: 16 },
    { repo: 'nonrtric_plt_rappmanager', snyk: 14, grype: 2 },
    { repo: 'nonrtric_rapp_orufhrecovery', snyk: 3, grype: 12 },
    { repo: 'aiml-fw_aihp_ips_kserve-adapter', snyk: 0, grype: 11 },
    { repo: 'nonrtric_plt_a1policymanagementservice', snyk: 9, grype: 1 },
    { repo: 'nonrtric_plt_ranpm', snyk: 3, grype: 9 },
    { repo: 'smo_teiv', snyk: 8, grype: 2 },
    { repo: 'nonrtric_plt_informationcoordinatorservice', snyk: 6, grype: 1 },
    { repo: 'oam', snyk: 1, grype: 5 },
    { repo: 'aiml-fw_athp_tps_kubeflow-adapter', snyk: 0, grype: 4 },
    { repo: 'aiml-fw_athp_data-extraction', snyk: 0, grype: 4 },
    { repo: 'nonrtric_rapp_ransliceassurance', snyk: 2, grype: 3 },
    { repo: 'nonrtric_rapp_healthcheck', snyk: 0, grype: 3 },
    { repo: 'ric-plt_conflictmgr', snyk: 0, grype: 2 },
    { repo: 'nonrtric_plt_dmaapmediatorproducer', snyk: 1, grype: 2 },
  ].sort((a, b) => (b.snyk + b.grype) - (a.snyk + a.grype));

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'bg-purple-100 text-purple-800';
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const VulnCell = ({ count, severity }) => {
    if (count === 0) return <td className="px-4 py-2 text-center text-gray-400">0</td>;
    return (
      <td className="px-4 py-2 text-center">
        <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getSeverityColor(severity)}`}>
          {count}
        </span>
      </td>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Vulnerability Scan Report</h1>
        <p className="text-gray-600 mb-8">Consolidated results from Snyk and Grype scans - September 30, 2025</p>

        {/* Scan Results Tables */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex space-x-4 mb-6 border-b">
            <button
              onClick={() => setActiveTab('grype')}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === 'grype'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Grype Results
            </button>
            <button
              onClick={() => setActiveTab('snyk')}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === 'snyk'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Snyk Results
            </button>
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'grype' && (
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Repository</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Critical</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">High</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Medium</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Low</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {gryperData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-mono text-gray-900">{row.repo}</td>
                      <VulnCell count={row.critical} severity="critical" />
                      <VulnCell count={row.high} severity="high" />
                      <VulnCell count={row.medium} severity="medium" />
                      <VulnCell count={row.low} severity="low" />
                      <td className="px-4 py-3 text-center font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'snyk' && (
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Repository</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Critical</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">High</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Medium</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Low</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {snykData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-mono text-gray-900">{row.repo}</td>
                      <VulnCell count={row.critical} severity="critical" />
                      <VulnCell count={row.high} severity="high" />
                      <VulnCell count={row.medium} severity="medium" />
                      <VulnCell count={row.low} severity="low" />
                      <td className="px-4 py-3 text-center font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Critical CVEs Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Critical CVEs Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Repository</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Snyk</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Grype</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {criticalCVEs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">{row.repo}</td>
                    <VulnCell count={row.snyk} severity="critical" />
                    <VulnCell count={row.grype} severity="critical" />
                    <td className="px-4 py-3 text-center">
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-200 text-purple-900">
                        {row.snyk + row.grype}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High CVEs Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">High Severity CVEs Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Repository</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Snyk</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Grype</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {highCVEs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">{row.repo}</td>
                    <VulnCell count={row.snyk} severity="high" />
                    <VulnCell count={row.grype} severity="high" />
                    <td className="px-4 py-3 text-center">
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-red-200 text-red-900">
                        {row.snyk + row.grype}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VulnerabilityDashboard;